from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import sys
sys.path.append('..')

from routers.tasks import router as tasks_router
from services.database import init_db
from workers.processor import task_processor
from websocket.notifier import manager

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Startup and shutdown events"""
    # Startup
    print("Starting Automation Agent...")
    init_db()
    await task_processor.start()
    print("Database initialized")
    print("Background worker started")
    print("Server ready!")
    
    yield
    
    # Shutdown
    print("Shutting down...")

app = FastAPI(
    title="AutoOps-AI",
    description="Multi-step workflow agent with reasoning and actions",
    version="1.0.0",
    lifespan=lifespan
)

# CORS middleware for UI integration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure appropriately for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(tasks_router)

@app.get("/")
async def root():
    """Root endpoint"""
    return {
        "service": "AutoOps-AI",
        "status": "running",
        "version": "1.0.0",
        "endpoints": {
            "run_task": "POST /api/run-task",
            "get_task": "GET /api/task/{task_id}",
            "health": "GET /api/health",
            "websocket": "WS /ws"
        }
    }

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    """WebSocket endpoint for live updates"""
    await manager.connect(websocket)
    try:
        while True:
            # Keep connection alive and receive messages
            data = await websocket.receive_text()
            await manager.send_personal_message(f"Echo: {data}", websocket)
    except WebSocketDisconnect:
        manager.disconnect(websocket)