import logo from './extensions/Logo.png'

const config = {
  auth: {
    logo,
  },
  head: {
    favicon: logo,
  },
  menu: {
    logo,
  },
  translations : {
    en : {
      "app.components.LeftMenu.navbrand.title" : "Blog Dashboard",
      "app.components.LeftMenu.navbrand.workplace" : "Welcome !",
      "Auth.form.welcome.title" : "Welcome to the Blog Dashboard",
      "Auth.form.welcome.subtitle" : "Login to your account",
      "Settings.profile.form.section.experience.interfaceLanguageHelp" : 
      "Preference changes will apply only for you",
    }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
