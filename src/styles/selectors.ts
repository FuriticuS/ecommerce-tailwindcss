import classNames from "classnames";

// Home
export const homePageRoot = "py-10";
export const homePageTitle = "mb-8 text-3xl font-bold text-center";
export const homeCategoryGrid =
  "grid gap-4 px-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4";

// Grid cards
export const gridCardLink =
  "relative flex flex-col items-center justify-center w-fit group";

export const gridCardCaption =
  "absolute font-semibold text-white text-center text-xl z-10 group-hover:text-red-500 group-hover:animate-wiggle transition duration-1300";

export const gridCardImage = "rounded-md w-5xl";

export const gridCardOverlay =
  "absolute inset-0 rounded-md opacity-20 bg-linear-to-b from-avocado-600 via-black to-avocado-500";

// Header
export const headerRoot =
  "flex flex-row align-baseline justify-between px-10 py-5 bg-blue-200 shadow-md";

export const headerLogo = "h-6";

export const headerNavList = "flex flex-row space-x-2";

// NavLink
export const navLinkBase =
  "font-miranda text-2xl font-semibold hover:text-black transition duration-300 ease-in-out";

export const navLinkActive = "text-red-500";

export const navLinkInactive = "text-blue-600";

export function navLinkMenuClassName(isActive: boolean): string {
  return classNames(navLinkBase, isActive ? navLinkActive : navLinkInactive);
}

// Footer
export const footerRoot = "px-5 py-5 bg-blue-200";

export const footerColumns = "grid gap-6 grid-cols-1 md:grid-cols-3";

export const footerColumnTitle = "text-black font-bold mb-3";

export const footerLink = "hover:text-red-500";

export const footerCopyright = "text-center text-gray-500 mt-7";

// Loading
export const loadingRoot = "flex flex-col items-center justify-center";

export const loadingText = "mt-12 mb-12 text-3xl font-bold";

// Общая «страница»
export const layoutPageSection = "px-6 py-10";

// Общий заголовок
export const headingPageCenter = "text-3xl font-bold text-center mb-6";

// Category
export const categoryFilterBlock = "mb-4";

export const categoryFilterLabel = "text-sm text-gray-500";

export const categoryProductGrid = "grid gap-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4";

// Product details
export const productDetailPanel =
  "flex flex-col items-center rounded-md bg-white p-6";

export const productDetailName = "mb-2 text-xl font-semibold";

export const productDetailPrice = "text-lg text-gray-700";

export const productDetailImage = "w-80 h-80 mb-4 rounded-md";

export const productDetailNotFound = "text-xl text-red-500 font-bold text-center";

// Cart
export const cartPage = "max-w-md p-5 mx-auto";

export const cartTitle = "mb-6 text-2xl font-bold text-center";

export const cartSectionBlock = "mb-8";

export const cartLineItemsHeading = "mb-4 text-lg font-semibold";

export const cartLineItem = "flex items-center justify-between pb-2 border-b";

export const cartLineItemList = "space-y-2";

export const cartTotalLine = "mt-4 font-medium text-md";

export const cartForm = "space-y-5";

export const cartFormSectionTitle = "h-2 text-lg font-semibold";

export const cartFieldStack = "flex flex-col";

export const cartFieldLabel =
  "text-sm text-gray-500 peer-placeholder-shown:text-gray-400 peer-focus:text-blue-500";

export const cartFieldLabelPayment =
  "text-sm text-gray-500 peer-focus:text-blue-500";

/** Инпут / select / option в формах (корзина, фильтр цены на категории) */
export const formControl =
  "peer p-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

export const cartFieldTextarea = classNames(formControl, "resize-none");

export const cartSubmitButton =
  "w-full px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600 cursor-pointer";

// About
export const aboutPage = "prose grid xl:grid-cols-1 w-screen";

// Thanks
export const thanksMessage = "px-6 py-10 text-center text-gray-700";

// Not found
export const notFoundPage =
  "px-6 py-20 text-center text-xl font-semibold text-gray-600";
