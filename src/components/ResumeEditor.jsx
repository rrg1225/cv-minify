import React, { useState, useEffect, useRef } from 'react';

// 【技术亮点扩展】通用型、超轻量 Markdown 文本解析引擎
function parseMarkdownToHtml(md) {
  if (!md) return '';
  let html = md
    // 转义 HTML 基础字符防止 XSS 注入
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    
    // 1. 标准多级标题支持
    .replace(/^#\s+(.+)$/gm, '<h1 class="text-3xl font-extrabold text-gray-900 border-b border-gray-200 pb-2 mb-4">$1</h1>')
    .replace(/^##\s+(.+)$/gm, '<h2 class="text-xl font-bold text-blue-600 pb-1 mt-6 mb-3 border-b border-gray-100">$1</h2>')
    .replace(/^###\s+(.+)$/gm, '<h3 class="text-lg font-semibold text-gray-800 mt-4 mb-2 flex justify-between">$1</h3>')
    .replace(/^####\s+(.+)$/gm, '<h4 class="text-base font-medium text-gray-700 mt-3 mb-1">$1</h4>')
    
    // 2. 通用引用块支持 (> 文本)
    .replace(/^>\s+(.+)$/gm, '<blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600 bg-gray-50 py-1 my-3 rounded-r">$1</blockquote>')
    
    // 3. 基础行内格式 (加粗与专用小标签)
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
    .replace(/\[(.*?)\]/g, '<span class="inline-block bg-gray-100 text-gray-800 text-xs px-1.5 py-0.5 rounded font-mono border border-gray-200 mx-0.5">$1</span>')
    
    // 4. 无序列表支持
    .replace(/^\*\s+(.+)$/gm, '<li class="list-disc list-inside text-gray-600 leading-relaxed ml-2">$1</li>')
    
    // 5. 换行与间距优化
    .replace(/\n\n/g, '<div class="h-3"></div>')
    .replace(/\n/g, '<br />');

  return html;
}

// 选项：通用新手欢迎引导文档
const GENERAL_WELCOME_MD = `# 🚀 欢迎使用 cv-minify (通用工作站)

> 这是一个零依赖、微秒级响应的现代化 **Markdown 实时工作站**。您可以在这里编写各种笔记、项目文档，也可以用来一键排版精美的简历。

## ✨ 核心玩转特性
* **即时保存**：内容会自动同步至本地 [LocalStorage]，即使刷新网页、意外断电，数据也绝对不会丢失。
* **独立跨屏**：点击右上角 [🖥️ 投射外接屏幕]，可以将预览区拉到第二块显示器上全屏查看，体验极致的敲码快感。
* **像素级打印**：随时按下 [Ctrl + P]，所有工具栏自动隐形，为您导出无瑕疵的 A4 尺寸 PDF。

## 🛠️ 测试我们的通用语法
* **列表测试**：支持标准无序符号。
* **加粗测试**：支持 **双星号加粗** 强调核心关键字。
* **引用测试**：在行首加入大括号符号可以激活引用块排版。`;

// 选项：精美程序员简历模板
const RESUME_TEMPLATE_MD = `# 你的名字 (Name)
📧 email@example.com | 📱 138-0000-0000 | 🌐 [github.com/username](https://github.com/username)

## 🛠️ 技术栈
* 熟练掌握 **前端开发框架** [React] 与 [Tailwind CSS]。
* 熟练运用手写高性能 [Markdown 渲染引擎] 构建高体验的工程应用。

## 💼 工作与项目经历
### 🚀 某某系统核心研发 - 全栈开发 | 2026
* 负责了系统核心模块的重构，使得页面热更新与内容流式同步性能提升了 **40%**。`;

export default function ResumeEditor() {
  const [markdown, setMarkdown] = useState('');
  const [hasFile, setHasFile] = useState(false); 
  const [viewMode, setViewMode] = useState('split'); 
  const [splitWidth, setSplitWidth] = useState(50); 
  const previewWindowRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedContent = localStorage.getItem('cv_minify_autosave');
    if (savedContent) {
      setMarkdown(savedContent);
      setHasFile(true);
    }
  }, []);

  useEffect(() => {
    if (hasFile && markdown) {
      localStorage.setItem('cv_minify_autosave', markdown);
    }
  }, [markdown, hasFile]);

  const htmlContent = parseMarkdownToHtml(markdown);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      setMarkdown(event.target.result);
      setHasFile(true);
    };
    reader.readAsText(file);
  };

  const handleCreateNew = (type) => {
    if (type === 'blank') setMarkdown('# 未命名 Markdown 文档\n\n开始编写您的精彩内容...');
    if (type === 'welcome') setMarkdown(GENERAL_WELCOME_MD);
    if (type === 'resume') setMarkdown(RESUME_TEMPLATE_MD);
    setHasFile(true);
  };

  const handleGoBack = () => {
    if (window.confirm('确认返回主控制台？系统已为您自动安全保存当前进度。')) {
      setHasFile(false);
    }
  };

  const openIndependentPreview = () => {
    if (previewWindowRef.current && !previewWindowRef.current.closed) {
      previewWindowRef.current.focus();
      return;
    }
    const popup = window.open('', 'CV_Preview_Window', 'width=800,height=900');
    if (popup) {
      previewWindowRef.current = popup;
      popup.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>工作站 - 独立屏幕实时预览</title>
          <script src="[https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4](https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4)"></script>
          <style>
            body { background: #f3f4f6; margin: 0; padding: 20px; font-family: sans-serif; }
            .preview-page { background: white; width: 210mm; min-height: 297mm; padding: 20mm; margin: 0 auto; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1); }
            @media print {
              body { background: white; padding: 0; }
              .preview-page { box-shadow: none; padding: 0; margin: 0; width: 210mm; }
            }
          </style>
        </head>
        <body>
          <div id="popup-preview-root" class="preview-page"></div>
        </body>
        </html>
      `);
      popup.document.close();
      popup.document.getElementById('popup-preview-root').innerHTML = htmlContent;
    }
  };

  useEffect(() => {
    if (previewWindowRef.current && !previewWindowRef.current.closed) {
      const root = previewWindowRef.current.document.getElementById('popup-preview-root');
      if (root) root.innerHTML = htmlContent;
    }
  }, [htmlContent]);

  // 1. 欢迎主工作台看板
  if (!hasFile) {
    return (
      <div class="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center font-sans p-6">
        <div class="max-w-2xl w-full text-center space-y-8">
          <div class="space-y-2">
            <h1 class="text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
              📄 cv-minify
            </h1>
            <p class="text-gray-400 text-sm">零依赖、跨屏幕的现代化 Markdown 实时渲染通用工作站</p>
          </div>

          {/* 三格功能主操纵区 */}
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 导入任何本地 md */}
            <div 
              onClick={() => fileInputRef.current.click()}
              class="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 hover:bg-gray-750 cursor-pointer transition flex flex-col items-center group text-center"
            >
              <div class="text-3xl mb-3 group-hover:scale-110 transition duration-200">📂</div>
              <h3 class="text-white font-medium mb-1 text-sm">导入本地 Markdown</h3>
              <p class="text-xs text-gray-400">读取电脑中任何 .md 格式文件进行修改排版</p>
              <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept=".md" class="hidden" />
            </div>

            {/* 新建欢迎文档（带通用语法测试） */}
            <div 
              onClick={() => handleCreateNew('welcome')}
              class="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-blue-500 hover:bg-gray-750 cursor-pointer transition flex flex-col items-center group text-center"
            >
              <div class="text-3xl mb-3 group-hover:scale-110 transition duration-200">🚀</div>
              <h3 class="text-white font-medium mb-1 text-sm">通用修改工作区</h3>
              <p class="text-xs text-gray-400">新建标准工作流，支持通用笔记与技术博客预览</p>
            </div>

            {/* 精选案例：精美简历模板 */}
            <div 
              onClick={() => handleCreateNew('resume')}
              class="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500 hover:bg-gray-750 cursor-pointer transition flex flex-col items-center group text-center"
            >
              <div class="text-3xl mb-3 group-hover:scale-110 transition duration-200">📄</div>
              <h3 class="text-white font-medium mb-1 text-sm">高级求职简历模板</h3>
              <p class="text-xs text-gray-400">一键加载专为程序员调优的像素级 A4 纸张模板</p>
            </div>
          </div>

          <div class="text-xs text-gray-500">
            不喜欢任何约束？也可以点击直接{' '}
            <button onClick={() => handleCreateNew('blank')} class="text-blue-400 hover:underline cursor-pointer">
              开辟纯净空白页
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 2. 主通用编辑器与渲染区
  return (
    <div class="h-screen w-screen flex flex-col overflow-hidden bg-gray-50 text-sm">
      <header class="h-12 border-b border-gray-200 bg-white flex items-center justify-between px-4 z-10 print:hidden">
        <div class="flex items-center space-x-2">
          <button onClick={handleGoBack} class="mr-2 text-gray-500 hover:text-gray-800 transition cursor-pointer" title="返回主控制台">⬅️ 控制台</button>
          <span class="font-bold text-gray-800 text-base">📄 cv-minify</span>
          <span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded font-medium">● 自动保存中</span>
        </div>

        <div class="flex items-center space-x-3">
          <div class="bg-gray-100 p-1 rounded-md flex space-x-1">
            <button onClick={() => setViewMode('edit')} class={`px-3 py-1 rounded text-xs transition cursor-pointer ${viewMode === 'edit' ? 'bg-white shadow-sm font-medium text-blue-600' : 'text-gray-600'}`}>仅编辑</button>
            <button onClick={() => setViewMode('split')} class={`px-3 py-1 rounded text-xs transition cursor-pointer ${viewMode === 'split' ? 'bg-white shadow-sm font-medium text-blue-600' : 'text-gray-600'}`}>双栏分屏</button>
            <button onClick={() => setViewMode('preview')} class={`px-3 py-1 rounded text-xs transition cursor-pointer ${viewMode === 'preview' ? 'bg-white shadow-sm font-medium text-blue-600' : 'text-gray-600'}`}>仅预览</button>
          </div>
          <button onClick={openIndependentPreview} class="px-3 py-1.5 bg-gray-800 text-white rounded text-xs hover:bg-gray-700 transition font-medium flex items-center cursor-pointer">🖥️ 投射外接屏幕</button>
          <button onClick={() => window.print()} class="px-3 py-1.5 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition font-medium flex items-center cursor-pointer">🖨️ 导出 PDF (Ctrl + P)</button>
        </div>
      </header>

      <main class="flex-1 flex overflow-hidden relative">
        <div style={{ width: viewMode === 'split' ? `${splitWidth}%` : viewMode === 'edit' ? '100%' : '0%' }} class={`h-full border-r border-gray-200 bg-gray-900 transition-all duration-150 ${viewMode === 'preview' ? 'hidden' : 'block'} print:hidden`}>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="在此处输入任意通用 Markdown 语法进行修改与预览..."
            class="w-full h-full p-4 font-mono text-gray-200 bg-gray-900 focus:outline-none resize-none leading-relaxed text-xs"
          />
        </div>

        {viewMode === 'split' && (
          <div class="absolute top-0 bottom-0 w-1 bg-gray-200 hover:bg-blue-400 cursor-ew-resize z-20 print:hidden"
               style={{ left: `${splitWidth}%` }}
               onMouseDown={(e) => {
                 const handleMouseMove = (moveEvent) => {
                   const percentage = (moveEvent.clientX / window.innerWidth) * 100;
                   if (percentage > 20 && percentage < 80) setSplitWidth(percentage);
                 };
                 const handleMouseUp = () => {
                   window.removeEventListener('mousemove', handleMouseMove);
                   window.removeEventListener('mouseup', handleMouseUp);
                 };
                 window.addEventListener('mousemove', handleMouseMove);
                 window.addEventListener('mouseup', handleMouseUp);
               }}
          />
        )}

        <div style={{ width: viewMode === 'split' ? `${100 - splitWidth}%` : viewMode === 'preview' ? '100%' : '0%' }} class={`h-full overflow-y-auto p-8 bg-gray-100 transition-all duration-150 ${viewMode === 'edit' ? 'hidden' : 'block'} print:p-0 print:bg-white print:w-full`}>
          <div id="a4-resume-page" dangerouslySetInnerHTML={{ __html: htmlContent }} class="bg-white mx-auto shadow-md p-12 text-gray-800 shadow-gray-300 w-[210mm] min-h-[297mm] box-border print:shadow-none print:p-0 print:mx-0 print:w-full" />
        </div>
      </main>
    </div>
  );
}