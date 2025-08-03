function Hero() {
  return (
    <section className="flex pt-40 flex-col items-center justify-center text-center py-16 px-6 bg-deepMint_500 dark:bg-deepMint_800">
      <h2 className="text-3xl md:text-5xl font-extrabold   text-deepMint_800 dark:text-deepMint_50 mb-4">
        أهلاً بك في صفحة البداية 🚀
      </h2>
      <p className="text-lg text-deepMint_800 dark:text-deepMint_100 max-w-xl">
        مشروع مبني بـ React و TailwindCSS باستخدام ألوان مخصصة. قابل للتعديل بسهولة ويدعم الوضع الداكن.
      </p>
      <button className="mt-8 px-6 py-3 bg-buttonDark hover:bg-accent text-white rounded transition duration-300">
        ابدأ الآن
      </button>
    </section>
  )
}

export default Hero
