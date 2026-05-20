import React from 'react'
import ReactDOM from 'react-dom/client'
import ResumeEditor from './components/ResumeEditor' // 引入你的核心简历组件
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResumeEditor /> {/* 👈 关键：把核心简历编辑器放进这里渲染！ */}
  </React.StrictMode>
)