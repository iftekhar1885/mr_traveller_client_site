import React from 'react';

const Featured = () => {
    return (
        <section className="py-6 sm:py-12 dark:bg-gray-800 gap-4 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Feature Stories</h2>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    <article className="flex flex-col dark:bg-gray-900">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://porzoton.com/wp-content/uploads/2020/03/Sajek-Valley-Rangamati-Featured.jpg" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Sajek Valley</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                <span>June 1, 2020</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col dark:bg-gray-900">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://static.poshukach.com/imgpreview?key=499d03dde5c80749&mb=imgdb_preview_264&q=90&w=315" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Sajek Valley</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                <span>June 2, 2020</span>
                                <span>2.2K views</span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col dark:bg-gray-900">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://static.poshukach.com/imgpreview?key=49125b41c86fbcf6&mb=imgdb_preview_434&q=90&w=280" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Sajek Valley</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                <span>June 3, 2020</span>
                                <span>2.3K views</span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col dark:bg-gray-900">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://static.poshukach.com/imgpreview?key=3c1a25410dd19a3e&mb=imgdb_preview_620&q=90&w=210" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Sajek Valley</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Sajek Tripuri Valley is one of the most popular tourist spots in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                <span>June 4, 2020</span>
                                <span>2.4K views</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Featured;