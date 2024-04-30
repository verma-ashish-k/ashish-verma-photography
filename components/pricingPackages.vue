<template>
    <div class="py-20">

        <div>
            <h1 class="text-3xl font-bold text-gray-600 text-center mb-10">Choose our pricing from a-la-cart menu or
                pick from
                one of
                the pre-curated packages</h1>
            <div class="divider-container my-2">
                <div class="divider"></div>
            </div>

            <div id="app">
                <!-- Slider for selecting square footage -->
                <div
                    class="slider-container mx-auto w-full max-w-6xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white my-8">
                    <label for="areaRangeSlider" class="block text-lg font-medium text-center">
                        Select Your Property Size
                    </label>
                    <input type="range" min="1" max="5" value="1" step="1" class="slider animate-pulse"
                        id="areaRangeSlider" @input="handleSliderChange" />
                    <div id="sliderTooltip" class=" ml-1 border border-transparent rounded-md w-fit p-1 bg-primary">{{
                        sqft }}</div>

                    <p class="text-center">
                        <span id="sqftDisplay">Slide to see your price</span>
                    </p>
                </div>
            </div>

            <!-- Section Pricing -->
            <section>
                <!-- Pricing Container-->
                <div class="mx-auto w-full max-w-7xl px-6 lg:px-10 pt-10">
                    <!-- Pricing Title -->
                    <div class="mb-2">
                        <h2 class="text-3xl font-bold md:text-3xl">Real Estate Photography ({{ sqft }})</h2>
                    </div>
                    <!-- Pricing Content -->
                    <div
                        class="mx-auto mb-8 grid h-auto w-full grid-cols-[1.25fr] gap-4 rounded-md bg-gradient-to-r from-red-500 to-orange-500 px-16 py-12 md:mb-12 md:grid-cols-[1.25fr_0.25fr_0.75fr] lg:mb-16 lg:grid-cols-[1.75fr_0.5fr_0.75fr] lg:px-20">
                        <!-- Pricing List -->
                        <ul class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <!-- Pricing Item 1 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">20-30 Photos</p>
                            </li>
                            <!-- Pricing Item 2 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">HDR Editing</p>
                            </li>
                            <!-- Pricing Item 3 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">Ultra Wide Angle</p>
                            </li>
                            <!-- Pricing Item 4 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">High Resolution</p>
                            </li>
                            <!-- Pricing Item 5 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">MLS Optimized</p>
                            </li>
                            <!-- Pricing Item 6 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">Professionally Edited</p>
                            </li>
                        </ul>
                        <!-- Divider Line -->
                        <div class="mx-auto h-full w-px md:border [border-left-style:solid]"></div>
                        <!-- Pricing -->
                        <div class="justify-center content-center text-center flex-col">
                            <h2 class="text-3xl font-bold md:text-5xl">{{ formattedPhotographyPrice }}
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="mx-auto w-full max-w-7xl px-6 lg:px-10 pt-1">
                    <!-- Pricing Title -->
                    <div class="mb-2">
                        <h2 class="text-3xl font-bold md:text-3xl">Real Estate Videography ({{ sqft }})</h2>
                    </div>
                    <!-- Pricing Content -->
                    <div
                        class="mx-auto mb-8 grid h-auto w-full grid-cols-[1.25fr] gap-4 rounded-md bg-gradient-to-r from-emerald-500 to-emerald-900 px-16 py-12 md:mb-12 md:grid-cols-[1.25fr_0.25fr_0.75fr] lg:mb-16 lg:grid-cols-[1.75fr_0.5fr_0.75fr] lg:px-20">
                        <!-- Pricing List -->
                        <ul class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <!-- Pricing Item 1 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">2 - 3 Minute</p>
                            </li>
                            <!-- Pricing Item 2 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">4K Video</p>
                            </li>
                            <!-- Pricing Item 3 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">HDR Video Available</p>
                            </li>
                            <!-- Pricing Item 4 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">High Resolution</p>
                            </li>
                            <!-- Pricing Item 5 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">No Ads</p>
                            </li>
                            <!-- Pricing Item 6 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">Professionally Edited</p>
                            </li>
                        </ul>
                        <!-- Divider Line -->
                        <div class="mx-auto h-full w-px md:border [border-left-style:solid]"></div>
                        <!-- Pricing -->
                        <div class="justify-center content-center text-center flex-col">
                            <h2 class="text-3xl font-bold md:text-5xl">{{ formattedVideographyPrice }}
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="mx-auto w-full max-w-7xl px-6 lg:px-10 pt-1">
                    <!-- Pricing Title -->
                    <div class="mb-2">
                        <h2 class="text-3xl font-bold md:text-3xl">iGuide ({{ sqft }})</h2>
                    </div>
                    <!-- Pricing Content -->
                    <div
                        class="mx-auto mb-8 grid h-auto w-full grid-cols-[1.25fr] gap-4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-16 py-12 md:mb-12 md:grid-cols-[1.25fr_0.25fr_0.75fr] lg:mb-16 lg:grid-cols-[1.75fr_0.5fr_0.75fr] lg:px-20">
                        <!-- Pricing List -->
                        <ul class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <!-- Pricing Item 1 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">2 - 3 Minute</p>
                            </li>
                            <!-- Pricing Item 2 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">4K Video</p>
                            </li>
                            <!-- Pricing Item 3 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">HDR Video Available</p>
                            </li>
                            <!-- Pricing Item 4 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">High Resolution</p>
                            </li>
                            <!-- Pricing Item 5 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">No Ads</p>
                            </li>
                            <!-- Pricing Item 6 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">Professionally Edited</p>
                            </li>
                        </ul>
                        <!-- Divider Line -->
                        <div class="mx-auto h-full w-px md:border [border-left-style:solid]"></div>
                        <!-- Pricing -->
                        <div class="justify-center content-center text-center flex-col">
                            <h2 class="text-3xl font-bold md:text-5xl">{{ formattedIguidePrice }}
                            </h2>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="divider-container my-2">
                        <div class="divider"></div>
                    </div>
                </div>
                <h1 class="text-3xl font-bold text-gray-600 text-center">Add On Items</h1>
                <div>
                    <div class="divider-container my-2">
                        <div class="divider"></div>
                    </div>
                </div>
                <div class="mx-auto w-full max-w-7xl px-6 lg:px-10 pt-1">
                    <!-- Pricing Title -->
                    <div class="mb-2">
                        <h2 class="text-3xl font-bold md:text-3xl">Aerial / Drone Imaging ({{ sqft }})</h2>
                    </div>
                    <!-- Pricing Content -->
                    <div
                        class="mx-auto mb-8 grid h-auto w-full grid-cols-[1.25fr] gap-4 rounded-md bg-gradient-to-r from-pink-500 to-rose-500 px-16 py-12 md:mb-12 md:grid-cols-[1.25fr_0.25fr_0.75fr] lg:mb-16 lg:grid-cols-[1.75fr_0.5fr_0.75fr] lg:px-20">
                        <!-- Pricing List -->
                        <ul class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <!-- Pricing Item 1 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">4K Quality</p>
                            </li>
                            <!-- Pricing Item 2 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">Transport Canada Licenced</p>
                            </li>
                            <!-- Pricing Item 3 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">HDR Video Available</p>
                            </li>
                            <!-- Pricing Item 4 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">High Resolution</p>
                            </li>
                            <!-- Pricing Item 5 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">Images / Videos</p>
                            </li>
                            <!-- Pricing Item 6 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">Professionally Edited</p>
                            </li>
                        </ul>
                        <!-- Divider Line -->
                        <div class="mx-auto h-full w-px md:border [border-left-style:solid]"></div>
                        <!-- Pricing -->
                        <div class="justify-center content-center text-center flex-col">
                            <h2 class="text-3xl font-bold md:text-5xl">{{ formattedDronePrice }}
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="mx-auto w-full max-w-7xl px-6 lg:px-10 pt-1">
                    <!-- Pricing Title -->
                    <div class="mb-2">
                        <h2 class="text-3xl font-bold md:text-3xl">Twilight Shoot ({{ sqft }})</h2>
                    </div>
                    <!-- Pricing Content -->
                    <div
                        class="mx-auto mb-8 grid h-auto w-full grid-cols-[1.25fr] gap-4 rounded-md bg-gradient-to-r from-blue-800 to-indigo-900 px-16 py-12 md:mb-12 md:grid-cols-[1.25fr_0.25fr_0.75fr] lg:mb-16 lg:grid-cols-[1.75fr_0.5fr_0.75fr] lg:px-20">
                        <!-- Pricing List -->
                        <ul class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <!-- Pricing Item 1 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">Dedicated afterhours</p>
                            </li>
                            <!-- Pricing Item 2 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">Best for Luxury Marketing</p>
                            </li>
                            <!-- Pricing Item 3 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">HDR Video Available</p>
                            </li>
                            <!-- Pricing Item 4 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">High Resolution</p>
                            </li>
                            <!-- Pricing Item 5 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">Images / Videos</p>
                            </li>
                            <!-- Pricing Item 6 -->
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">Professionally Edited</p>
                            </li>
                        </ul>
                        <!-- Divider Line -->
                        <div class="mx-auto h-full w-px md:border [border-left-style:solid]"></div>
                        <!-- Pricing -->
                        <div class="justify-center content-center text-center flex-col">
                            <h2 class="text-3xl font-bold md:text-5xl">{{ formattedTwilightPrice }}
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="mx-auto w-full max-w-7xl px-6 lg:px-10 pt-1">
                    <!-- Pricing Title -->
                    <div class="mb-2">
                        <h2 class="text-3xl font-bold md:text-3xl">Travel Fees</h2>
                    </div>
                    <!-- Pricing Content -->
                    <div
                        class="mx-auto mb-8 grid h-auto w-full grid-cols-[1.25fr] gap-4 rounded-md bg-gradient-to-r from-teal-200 to-teal-500 px-16 py-12 md:mb-12 md:grid-cols-[1.25fr_0.25fr_0.75fr] lg:mb-16 lg:grid-cols-[1.75fr_0.5fr_0.75fr] lg:px-20">
                        <!-- Pricing List -->
                        <ul class="grid grid-cols-1 gap-4 lg:grid-cols-2">
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">Charged at $0.70 / km</p>
                            </li>
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">Calculated both ways</p>
                            </li>
                            <li class="flex flex-row items-center">
                                <img src="https://assets.website-files.com/6357722e2a5f19121d37f84d/635a09615f1f0a63beab4e4d_Check.svg"
                                    alt="" class="mr-4 h-4 w-4" />
                                <p class="">Charged outside of Calgary City Limits</p>
                            </li>
                        </ul>
                        <!-- Divider Line -->
                        <div class="mx-auto h-full w-px md:border [border-left-style:solid]"></div>
                        <!-- Pricing -->
                        <div class="justify-center content-center text-center flex-col">
                            <h2 class="text-3xl font-bold md:text-5xl">Variable
                            </h2>
                        </div>
                    </div>
                </div>
            </section>

            <div class="divider-container my-2">
                <div class="divider"></div>
            </div>


        </div>
        <h1 class="text-3xl font-bold text-gray-600 text-center mt-5">Real Estate Pricing Packages<br /><span
                class="text-sm">(For properties
                {{ sqft }})</span></h1>
        <div class="flex flex-col lg:flex-row justify-center items-center gap-5 lg:my-5 content-center">
            <div
                class="w-full max-w-sm p-4 bg-gradient-to-r from-slate-300 to-slate-500 border border-gray-200 rounded-lg shadow sm:p-8">
                <h5 class="mb-4 text-xl font-medium text-white">Basic Package</h5>
                <div class="flex items-baseline text-gray-900 ">
                    <span class="text-5xl font-extrabold tracking-tight">{{ formattedBasicPackage }}</span>
                </div>
                <ul role="list" class="space-y-5 my-7">
                    <li class="flex items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-orange-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="text-base font-normal leading-tight text-white ms-3">25 - 30 HDR
                            Photos</span>
                    </li>
                    <li class="flex">
                        <svg class="flex-shrink-0 w-4 h-4 text-orange-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="text-base font-normal leading-tight text-white  ms-3">2 - 3 min 4K
                            Video</span>
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">iGuide</span>
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Social Media
                            Slideshow</span>
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Single Page Website</span>
                    </li>
                </ul>
                <NuxtLink to="/contact">
                    <button type="button"
                        class="text-white bg-orange-400 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center transition-all ease-in-out">Book
                        now!</button>
                </NuxtLink>
            </div>


            <div
                class="w-full max-w-sm p-4 bg-gradient-to-r from-rose-400 to-red-500 border border-gray-200 rounded-lg shadow sm:p-8">
                <h5 class="mb-4 text-xl font-medium text-white">Plus Package</h5>
                <div class="flex items-baseline text-gray-900 ">
                    <span class="text-5xl font-extrabold tracking-tight">{{ formattedPlusPackage }}</span>
                </div>
                <ul role="list" class="space-y-5 my-7">
                    <li class="flex items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="text-base font-normal leading-tight text-white  ms-3">25 - 30 HDR
                            Photos</span>
                    </li>
                    <li class="flex">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="text-base font-normal leading-tight text-white ms-3">2 - 3 min 4K
                            Video</span>
                    </li>
                    <li class="flex">
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="text-base font-normal leading-tight text-white ms-3">iGuide</span>
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Social Media
                            Slideshow</span>
                    </li>
                    <li class="flex line-through decoration-gray-500">
                        <svg class="flex-shrink-0 w-4 h-4 text-gray-500" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="text-base font-normal leading-tight text-gray-500 ms-3">Single Page Website</span>
                    </li>
                </ul>
                <NuxtLink to="/contact"><button type="button"
                        class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 -blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center transition-all ease-in-out">Book
                        now!</button></NuxtLink>

            </div>


            <div
                class="w-full max-w-sm p-4 bg-gradient-to-r from-cyan-500 to-blue-500 border border-gray-200 rounded-lg shadow sm:p-8">
                <h5 class="mb-4 text-xl font-medium text-white">Ultimate Package</h5>
                <div class="flex items-baseline text-gray-900 ">
                    <span class="text-5xl font-extrabold tracking-tight">{{ formattedUltimatePackage }}</span>
                </div>
                <ul role="list" class="space-y-5 my-7">
                    <li class="flex items-center">
                        <svg class="flex-shrink-0 w-4 h-4 text-orange-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="text-base font-normal leading-tight text-white ms-3">25 - 30 HDR
                            Photos</span>
                    </li>
                    <li class="flex">
                        <svg class="flex-shrink-0 w-4 h-4 text-orange-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="text-base font-normal leading-tight text-white ms-3">2 - 3 min 4K
                            Video</span>
                    </li>
                    <li class="flex">
                        <svg class="flex-shrink-0 w-4 h-4 text-orange-400" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="text-base font-normal leading-tight text-white ms-3">iGuide</span>
                    </li>
                    <li class="flex">
                        <svg class="flex-shrink-0 w-4 h-4 text-orange-400 500" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="text-base font-normal leading-tight text-white ms-3">Social Media Slideshow</span>
                    </li>
                    <li class="flex">
                        <svg class="flex-shrink-0 w-4 h-4 text-orange-400 500" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="text-base font-normal leading-tight text-white ms-3">Single Page Website</span>
                    </li>
                </ul>
                <NuxtLink to="/contact">
                    <button type="button"
                        class="text-white bg-orange-400 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-200 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center transition-all ease-in-out">Book
                        now!</button>
                </NuxtLink>
            </div>
        </div>
    </div>

    <div class="divider-container my-2">
        <div class="divider"></div>
    </div>
    <h1 class="text-3xl font-bold text-gray-600 text-center">Contact us for Commercial Real Estate Pricing</h1>
    <div class="divider-container mt-2">
        <div class="divider"></div>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';

// Data structure for pricing and square footage
const pricingData = [
    { sqft: 'Up to 1000sqft', prices: { photography: 119, videography: 179, iguide: 149, drone: 149, twilight: 99, basicPackage: 279, plusPackage: 379, ultimatePackage: 499 } },
    { sqft: '1000 sqft to 2500sqft', prices: { photography: 159, videography: 199, iguide: 249, drone: 199, twilight: 149, basicPackage: 379, plusPackage: 549, ultimatePackage: 599 } },
    { sqft: '2500sqft to 4000sqft', prices: { photography: 199, videography: 249, iguide: 299, drone: 249, twilight: 249, basicPackage: 249, plusPackage: 349, ultimatePackage: 599 } },
    { sqft: '4000sqft to 7500sqft', prices: { photography: 249, videography: 349, iguide: 349, drone: 249, twilight: 349, basicPackage: 399, plusPackage: 549, ultimatePackage: 649 } },
    { sqft: 'above 7500sqft', prices: { photography: "Call Us", videography: "Call Us", iguide: "Call Us", drone: "Call Us", twilight: "Call Us", basicPackage: "Call Us", plusPackage: "Call Us", ultimatePackage: "Call Us" } }
];

// Reactive references for square footage and pricing
const sqft = ref(pricingData[0].sqft);
const prices = ref(pricingData[0].prices);

// Computed properties for formatting prices
const formattedPhotographyPrice = computed(() => typeof prices.value.photography === 'number' ? `$${prices.value.photography}` : prices.value.photography);
const formattedVideographyPrice = computed(() => typeof prices.value.videography === 'number' ? `$${prices.value.videography}` : prices.value.videography);
const formattedIguidePrice = computed(() => typeof prices.value.iguide === 'number' ? `$${prices.value.iguide}` : prices.value.iguide);
const formattedDronePrice = computed(() => typeof prices.value.drone === 'number' ? `$${prices.value.drone}` : prices.value.drone);
const formattedTwilightPrice = computed(() => typeof prices.value.twilight === 'number' ? `$${prices.value.twilight}` : prices.value.twilight);
const formattedBasicPackage = computed(() => typeof prices.value.basicPackage === 'number' ? `$${prices.value.basicPackage}` : prices.value.basicPackage);
const formattedPlusPackage = computed(() => typeof prices.value.plusPackage === 'number' ? `$${prices.value.plusPackage}` : prices.value.plusPackage);
const formattedUltimatePackage = computed(() => typeof prices.value.ultimatePackage === 'number' ? `$${prices.value.ultimatePackage}` : prices.value.ultimatePackage);

onMounted(() => {
    const slider = document.getElementById('areaRangeSlider');
    setTooltipInitialPosition(slider);
});



// Function to handle slider change without updating tooltip position
const handleSliderChange = (event) => {
    const selectedIndex = event.target.value - 1;
    sqft.value = pricingData[selectedIndex].sqft;
    prices.value = pricingData[selectedIndex].prices;
};

// Function to set the initial position of the tooltip at the beginning of the slider
const setTooltipInitialPosition = (slider) => {
    const tooltip = document.getElementById('sliderTooltip');
    const sliderRect = slider.getBoundingClientRect();

    tooltip.style.left = `${sliderRect.left}px`;  // Position at the start of the slider
    tooltip.style.top = `${slider.offsetTop - tooltip.offsetHeight - 10}px`;  // Position it a bit above the slider
    tooltip.style.visibility = 'visible';
};

</script>


<style scoped>
.slider-container {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.slider {
    width: 100%;
    margin: 10px 0;
    -webkit-appearance: none;
    background: transparent;
    appearance: none;
}

@keyframes pulse {
    0% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }

    70% {
        transform: scale(1.1);
        box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0);
    }

    100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    background: yellow;
    cursor: pointer;
    border-radius: 50%;
    margin-top: -5px;
    box-shadow: 0 0 2px #000;
    animation: pulse 2s infinite ease-in-out;
    -webkit-animation: pulse 2s infinite ease-in-out;
}

.slider::-webkit-slider-runnable-track {
    width: 100%;
    height: 20px;
    cursor: pointer;
    background: #b3acf2;
    border-radius: 9px;
    box-shadow: inset 0 0 2px #000;
}

.slider-container {
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.divider-container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.divider {
    height: 2px;
    width: 70%;
    background-image: linear-gradient(to right, #4c51bf, #805ad5);
}
</style>
