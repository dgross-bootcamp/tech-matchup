/* eslint-disable @next/next/no-img-element */
export default function Matchup() {
    return (
        <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-12 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Let's create a matchup!</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="tech-one" className="block text-sm font-medium leading-6 text-gray-900">
                                Tech 1:
                            </label>
                            <select
                                id="tech-one"
                                name="tech-one"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue="JavaScript"
                            >
                                <option>JavaScript</option>
                                <option>TypeScript</option>
                                <option>MongoDB</option>
                                <option>MySQL</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="tech-two" className="block text-sm font-medium leading-6 text-gray-900">
                                Tech 2:
                            </label>
                            <select
                                id="tech-two"
                                name="tech-two"
                                className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue="TypeScript"
                            >
                                <option>JavaScript</option>
                                <option>TypeScript</option>
                                <option>MongoDB</option>
                                <option>MySQL</option>
                            </select>
                        </div>


                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Create Matchup!
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )

}
