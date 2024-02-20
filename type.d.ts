import '@nuxtjs/cloudinary'

declare module '@nuxtjs/cloudinary' {
  interface ModuleOptions {
    apiSecret?: string;
  }
}
