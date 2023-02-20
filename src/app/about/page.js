/* eslint-disable @next/next/no-img-element */

const features = [
  { name: 'MOVIZOO', description: '2 Perusahaan menjadi 1' },
  { name: 'Ministry Of Vape Indonesia', description: 'Perusahaan Vape Berstanda kelas A dan salah satu Perusahaan Biotech dengan PSL disampingnya' },
  { name: 'VapeZoo', description: 'Perusahaan Vape yang memfokuskan pada produk Hexomh' },
  { name: 'Slank', description: 'Salah Satu grup Band Fenomenal Indonesia yang bergerak demi kebaikan' },
  { name: 'PSL', description: 'Bagian dari MOVI yang dikhususkan untuk membuat Liquid dengan standar Farmasi kelas A' },
]

export default function about() {
  return (
    <div className="bg-white">
      <div class="container my-24 px-6 mx-auto">


        <section class="mb-32 text-gray-800">
          <h2 class="text-2xl font-bold mb-12 text-center">About Us</h2>

          <div class="flex flex-wrap mb-12">
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg">
                <img src="https://mdbootstrap.com/img/new/standard/city/028.jpg" class="w-full" alt="Louvre" />
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  ></div>
                </a>
              </div>
            </div>

            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
              <h3 class="text-2xl font-bold mb-4"></h3>

              <p class="text-gray-500 mb-6">
                Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat vulputate. Ut
                vulputate est non quam dignissim elementum. Donec a ullamcorper diam.
              </p>
              <p class="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae nulla saepe rerum
                aspernatur odio amet perferendis tempora mollitia? Ratione unde magni omnis quaerat
                blanditiis cumque dolore placeat rem dignissimos?
              </p>
            </div>
          </div>

          <div class="flex flex-wrap lg:flex-row-reverse mb-12">
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
              <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
              >
                <img src="https://mdbootstrap.com/img/new/standard/city/033.jpg" class="w-full" alt="Louvre" />
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  ></div>
                </a>
              </div>
            </div>

            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
              <h3 class="text-2xl font-bold mb-4">Exhibition in Paris</h3>

              <p class="text-gray-500">
                Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta dui, sit amet rutrum
                enim massa in ante. Curabitur in justo at lorem laoreet ultricies. Nunc ligula felis,
                sagittis eget nisi vitae, sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus vel
                sagittis nec, placerat vel justo. Duis faucibus sapien eget tortor finibus, a eleifend
                lectus dictum. Cras tempor convallis magna id rhoncus. Suspendisse potenti. Nam mattis
                faucibus imperdiet. Proin tempor lorem at neque tempus aliquet. Phasellus at ex
                volutpat, varius arcu id, aliquam lectus. Vestibulum mattis felis quis ex pharetra
                luctus. Etiam luctus sagittis massa, sed iaculis est vehicula ut.
              </p>
            </div>
          </div>

          <div class="flex flex-wrap">
            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <div class="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
              >
                <img src="https://mdbootstrap.com/img/new/standard/city/079.jpg" class="w-full" alt="Louvre" />
                <a href="#!">
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                  ></div>
                </a>
              </div>
            </div>

            <div class="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
              <h3 class="text-2xl font-bold mb-4">Stock market boom</h3>

              <p class="text-gray-500">
                Sed sollicitudin purus sed nulla dignissim ullamcorper. Aenean tincidunt vulputate
                libero, nec imperdiet sapien pulvinar id. Nullam scelerisque odio vel lacus faucibus,
                tincidunt feugiat augue ornare. Proin ac dui vel lectus eleifend vestibulum et
                lobortis risus. Nullam in commodo sapien. Curabitur ut erat congue sem finibus
                eleifend egestas eu metus. Sed ut dolor id magna rutrum ultrices ut eget libero. Duis
                vel porttitor odio. Ut pulvinar sed turpis ornare tincidunt. Donec luctus, mi euismod
                dignissim malesuada, lacus lorem commodo leo, tristique blandit ante mi id metus.
                Integer et vehicula leo, vitae interdum lectus. Praesent nulla purus, commodo at
                euismod nec, blandit ultrices erat. Aliquam eros ipsum, interdum et mattis vitae,
                faucibus vitae justo. Nulla condimentum hendrerit leo, in feugiat ipsum condimentum
                ac. Maecenas sed blandit dolor.
              </p>
            </div>
          </div>
        </section>


      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">MOVIZOO</h2>
          <p className="mt-4 text-gray-500">
            Kuypodlott xxxxxx
          </p>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
            alt="Side of walnut card tray with card groove and recessed card area."
            className="rounded-lg bg-gray-100"
          />
          <img
            src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  )
}
