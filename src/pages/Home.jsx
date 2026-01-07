import React from 'react'

export default function Home() {
  return (
    <section className="relative w-full py-12 md:py-20 px-4 md:px-20 lg:px-40 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <div className="flex flex-col gap-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-dark dark:text-primary">The Future
                of Fungi</span>
            </div>
            <h1
              className="text-text-main dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
              Innovating Agriculture with Nature's Superfood
            </h1>
            <p className="text-text-muted dark:text-gray-300 text-lg md:text-xl font-normal leading-relaxed max-w-lg">
              Premium quality mushrooms and sustainable agro-products cultivated with cutting-edge technology for a
              healthier future.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              className="flex items-center justify-center rounded-lg h-12 px-6 bg-primary hover:bg-primary-dark transition-all text-black text-base font-bold leading-normal shadow-lg shadow-primary/20 hover:shadow-primary/40">
              Explore Products
            </button>
            <button
              className="flex items-center justify-center rounded-lg h-12 px-6 bg-white border border-gray-200 hover:border-primary text-text-main transition-all text-base font-medium leading-normal hover:bg-gray-50 dark:bg-surface-dark dark:border-gray-700 dark:text-white dark:hover:border-primary">
              Learn More
            </button>
          </div>
          <div className="flex items-center gap-6 mt-6 text-sm text-text-muted dark:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl" >check_circle</span>
              <span>100% Organic</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl" >check_circle</span>
              <span>Sustainable</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl" >check_circle</span>
              <span>Tech-Driven</span>
            </div>
          </div>
        </div>
        <div className="w-full order-1 lg:order-2">
          <div
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent z-10"></div>
            <div className="w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB-5YHGCsAag0gt_fkB-7SofmhSwjo2G_ZL92exxm8vjmoWsnX-cG0AaOfwQNfdL7-fO0UXTaJ6UfjSj-tCOLtpMNLxqxfuk4hcumkSGkNB7SYoD6u_5FMXsJmfwttZRyj-e9zoRfRpiBYyg3Uz51NrB0qo2Fhycvq63brhndNO1n_CHlmL5vAMiyNyvKHSDKgKk4h8Z4yseohErbDs-n-TXALWZsCBqzcFLg_mApONFM_04SK0_dbUIdUQcFNTnJciWIKisKLRrbE")'
              }}
              data-alt="Close up of fresh oyster mushrooms growing in a controlled environment"
            // style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-5YHGCsAag0gt_fkB-7SofmhSwjo2G_ZL92exxm8vjmoWsnX-cG0AaOfwQNfdL7-fO0UXTaJ6UfjSj-tCOLtpMNLxqxfuk4hcumkSGkNB7SYoD6u_5FMXsJmfwttZRyj-e9zoRfRpiBYyg3Uz51NrB0qo2Fhycvq63brhndNO1n_CHlmL5vAMiyNyvKHSDKgKk4h8Z4yseohErbDs-n-TXALWZsCBqzcFLg_mApONFM_04SK0_dbUIdUQcFNTnJciWIKisKLRrbE');"
            >
            </div>
            <div
              className="absolute bottom-6 right-6 z-20 bg-white/90 dark:bg-black/80 backdrop-blur px-4 py-3 rounded-xl border border-white/20 shadow-lg">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Daily Yield</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
