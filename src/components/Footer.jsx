import React from 'react'

export default function Footer() {
  return (
    <footer
      class="bg-surface-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 py-10 px-4 md:px-20 lg:px-40">
      <div class="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex flex-col items-center md:items-start">
          <div class="flex items-center gap-2 mb-2">
            <span class="material-symbols-outlined text-primary">agriculture</span>
            <span class="font-bold text-lg dark:text-white">Sumedha Agro</span>
          </div>
          <p class="text-sm text-text-muted dark:text-gray-500">© 2024 Sumedha Agro. All rights reserved.</p>
        </div>
        <div class="flex gap-8">
          <a class="text-sm text-text-main dark:text-gray-400 hover:text-primary transition-colors" href="#">Privacy
            Policy</a>
          <a class="text-sm text-text-main dark:text-gray-400 hover:text-primary transition-colors" href="#">Terms of
            Service</a>
          <a class="text-sm text-text-main dark:text-gray-400 hover:text-primary transition-colors" href="#">Cookies</a>
        </div>
      </div>
    </footer>
  )
}
