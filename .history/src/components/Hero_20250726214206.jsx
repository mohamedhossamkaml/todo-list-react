function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 px-6 bg-deepMint-100 dark:bg-deepMint-800">
      <h2 className="text-3xl md:text-5xl font-extrabold text-headerDark dark:text-softDark mb-4">
        أهلاً بك في صفحة البداية 🚀
      </h2>
      <p className="text-lg text-textLight dark:text-textDark max-w-xl">
        مشروع مبني بـ React و TailwindCSS باستخدام ألوان مخصصة. قابل للتعديل بسهولة ويدعم الوضع الداكن.
      </p>
      <button className="mt-8 px-6 py-3 bg-buttonDark hover:bg-accent text-white rounded transition duration-300">
        ابدأ الآن
      </button>
    </section>
  )
}

export default Hero
