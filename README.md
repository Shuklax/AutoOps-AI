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
<img width="1386" height="503" alt="image" src="https://github.com/user-attachments/assets/bc0f6369-c48a-48c6-b416-7d5bc3c8fb25" />


## API Endpoints

**POST /analyze**  
Analyzes a financial document or URL.
