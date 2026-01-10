import React from 'react'
import { FaTractor } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer
      className="bg-surface-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 py-10 px-4 md:px-20 lg:px-40">
      <div className="max-w[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-2 mb-2">
            <span className="material-symbols-outlined text-primary"> <FaTractor className="material-symbols-outlined text-3xl" /></span>
            <span className="font-bold text-lg dark:text-white">Sumedha Agro</span>
          </div>
          <p className="text-sm text-text-side dark:text-gray-500">© 2024 Sumedha Agro. All rights reserved.</p>
        </div>
        <div className="flex gap-8">
          <a className="text-sm text-text-main dark:text-gray-400 hover:text-primary transition-colors" href="#">Privacy
            Policy</a>
          <a className="text-sm text-text-main dark:text-gray-400 hover:text-primary transition-colors" href="#">Terms of
            Service</a>
          <a className="text-sm text-text-main dark:text-gray-400 hover:text-primary transition-colors" href="#">Cookies</a>
        </div>
      </div>
    </footer>
  )
}
