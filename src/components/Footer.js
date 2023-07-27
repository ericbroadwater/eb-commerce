import { useState, useEffect } from 'react'
import Stack, { onEntryChange } from "../cstack";



export default function Footer() {
  const [entry, setEntry] = useState({});


  const getContent = async () => {
    const entry = await Stack.getElement('bltf2fe4be62ea6a29c', 'footer');
    setEntry(entry);
  }

  useEffect(() => {
    onEntryChange(getContent);
  }, []);

  const footerNavigation = []

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('submitted form');

    alert('clicked');
  }

  entry?.categories?.forEach(cat => {
    let category = { name: cat.name, items: [] }
    cat.items.forEach(item => {
      category.items.push({ name: item.item, href: '#' });
    })
    footerNavigation.push(category);
  })

  return (
    <footer aria-labelledby="footer-heading" className="bg-white">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-200">
          <div className="pb-20 pt-16">
            <div className="md:flex md:justify-center">
              <img
                src={entry?.logo?.url}
                alt=""
                className="h-8 w-auto"
              />
            </div>
            <div className="mx-auto mt-16 max-w-5xl xl:grid  xl:gap-8">
              <div className="space-y-12 md:grid md:grid-cols-4 md:gap-8 md:space-y-0">
                {footerNavigation.map(category => {
                  return (
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
                      <ul role="list" className="mt-6 space-y-4">
                        {category.items.map((item) => (
                          <li key={item.name} className="text-sm">
                            <a href={item.href} className="text-gray-500 hover:text-gray-600">
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
            <div className="flex items-center rounded-lg bg-gray-100 p-6 sm:p-10">
              <div className="mx-auto max-w-sm">
                <h3 className="font-semibold text-gray-900">Sign up for our newsletter</h3>
                <p className="mt-2 text-sm text-gray-500">
                  The latest news, articles, and resources, sent to your inbox weekly.
                </p>
                <form onSubmit={handleSubmit} className="mt-4 sm:mt-6 sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="text"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                  <div className="mt-3 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="relative mt-6 flex items-center px-6 py-12 sm:px-10 sm:py-16 lg:mt-0">
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/footer-02-exclusive-sale.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center saturate-0 filter"
                />
                <div className="absolute inset-0 bg-indigo-600 bg-opacity-90" />
              </div>
              <div className="relative mx-auto max-w-sm text-center">
                <h3 className="text-2xl font-bold tracking-tight text-white">Get early access</h3>
                <p className="mt-2 text-gray-200">
                  Did you sign up to the newsletter? If so, use the keyword we sent you to get access.{' '}
                  <a href="#" className="whitespace-nowrap font-bold text-white hover:text-gray-200">
                    Go now<span aria-hidden="true"> &rarr;</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">&copy; 2021 All Rights Reserved</p>
          </div>

          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              {/* {footerNavigation.bottomLinks.map((item) => (
                <a key={item.name} href={item.href} className="text-sm text-gray-500 hover:text-gray-600">
                  {item.name}
                </a>
              ))} */}
            </div>

            <div className="ml-6 border-l border-gray-200 pl-6">

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}