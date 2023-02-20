/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'xxxxx',
    description:
      'xxxxxxx.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'xxxx',
    description:
      'xxxxxx.',
    icon: LockClosedIcon,
  },
  {
    name: 'xxxxxx',
    description:
      'xxxxxxx.',
    icon: ArrowPathIcon,
  },
  {
    name: 'xxxxxx',
    description:
      'xxxxxxxx.',
    icon: FingerPrintIcon,
  },
]

export default function product() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-black">KuyPodlott</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            xxxxxxxxxx
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            xxxxxxxxxx
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div class="bg-white">
  <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        xxxxxxx
      </h2>
      <p class="mt-4 text-gray-500">xxxxxxx</p>

      <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
        <div class="border-t border-gray-200 pt-4">
        <div><img className="h-20" src="coconut.gif"/></div>
          <dt class="font-medium text-gray-900">xxxxxxx</dt>
          <dd class="mt-2 text-sm text-gray-500">xxxxxxx</dd>
        </div>

        <div class="border-t border-gray-200 pt-4">
        <div><img className="h-20" src="coconut.gif"/></div>
          <dt class="font-medium text-gray-900">xxxxxxx</dt>
          <dd class="mt-2 text-sm text-gray-500">xxxxxxx</dd>
        </div>

        <div class="border-t border-gray-200 pt-4">
        <div><img className="h-20" src="coconut.gif"/></div>
          <dt class="font-medium text-gray-900">xxxxx</dt>
          <dd class="mt-2 text-sm text-gray-500">xxxxx</dd>
        </div>

        <div class="border-t border-gray-200 pt-4">
        <div><img className="h-20" src="coconut.gif"/></div>
          <dt class="font-medium text-gray-900">xxxxxx</dt>
          <dd class="mt-2 text-sm text-gray-500">xxxxxx</dd>
        </div>

        <div class="border-t border-gray-200 pt-4">
        <div><img className="h-20" src="coconut.gif"/></div>
          <dt class="font-medium text-gray-900">xxxxx</dt>
          <dd class="mt-2 text-sm text-gray-500">xxxx</dd>
        </div>

        <div class="border-t border-gray-200 pt-4">
        <div><img className="h-20" src="coconut.gif"/></div>
          <dt class="font-medium text-gray-900">xxxxxx</dt>
          <dd class="mt-2 text-sm text-gray-500">xxxxxx</dd>
        </div>
      </dl>
    </div>
    
    <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100"/>
      <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100"/>
      <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100"/>
      <img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100"/>
    </div>
  </div>
</div>

    </div>
  )
}
