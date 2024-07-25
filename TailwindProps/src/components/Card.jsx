import React from 'react'

function Card({username, photo,Des, para}) {
  return (
    <div>
      <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={photo} alt="" width="384" height="512"/>
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “{para}”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
       {username}
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        {Des}
      </div>
    </figcaption>
  </div>
</figure>

    </div>
  )
}

export default Card
