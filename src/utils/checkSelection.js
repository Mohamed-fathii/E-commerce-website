const storePath = "/";
const cartPath = "/cart";
const adminPath = "/add-products";

export const isStoreSelected = (currentPath) => currentPath === storePath;
export const isCartSelected = (currentPath) => currentPath === cartPath;
export const isAdminSelected = (currentPath) => currentPath === adminPath;
