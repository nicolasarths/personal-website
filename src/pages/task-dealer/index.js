import Link from "next/link";
import { useState, useEffect } from "react";

export default function TaskDealer() {
  return (<>
  <div className="task-dealer black">
        <header>
            <span>Bem-vindo ao</span>
          <h1 className="tasks-title">TASK DEALER</h1>
          <p>Crie sua primeira lista</p>
          <Link href="/task-dealer/first-task">
            <button className="tasks-button">
                Começar
            </button>
          </Link>
        </header>
  </div>
        
  </>)
}
