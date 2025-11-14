# Enterprise-Automation-Agent
A multi-step workflow agent that retrieves data, reasons, takes actions, writes results and then notifies user.

## Overview
Enterprise Automation Agent is a multi-step agent framework that retrieves business data, performs LLM-powered reasoning, executes actions, stores results in a database, and streams live updates to a UI via WebSockets.

This project demonstrates:

1. **Agent loops**
2. **reasoning + tool calling**
3. **workflow automation**
4. **background workers**
5. **event streaming**
6. **database integration**

## Features (MVP)

1. FastAPI backend + background worker
2. Workflow:
    - Retrieve data (API / DB / dummy source)
    - LLM reasoning (categorize, analyze, decide)
    - Execute action
    - Store results
    - Push updates via Websockets
3. Modular agent loop
4. Extensible tool system

## Architecture Diagram

High-Level Architecture:  


## API Endpoints

**POST /analyze**  
Analyzes a financial document or URL.