const express = require("express");
const route = express();
const bodyparser = require("body-parser");
const multer = require("multer");
// middleware
const admiddleware = require("../middlewares/adminml");
const accountmiddle = require("../middlewares/acountml");
const membermiddle = require("../middlewares/memberml");
// controller
const controll = require("../controllers/controll");
// mongodb connect
const connectdb = require("../database/connectdb");
// session
const session = require("express-session");
const galleymodel = require("../models/galleymodel");

route.use(session({ secret: "11111dd" }));
route.use(bodyparser.json());
// multer upload

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destinationfile = "./public/blogimages";
    cb(null, destinationfile);
  },
  filename: function (req, file, cb) {
    const filenam = Date.now() + "-" + file.originalname;
    cb(null, filenam);
  },
});
const uploads = multer({ storage: storage });
const storageuser = multer.diskStorage({
  destination: function (req, file, cb) {
    const filesave = "./public/userimages";
    cb(null, filesave);
  },
  filename: function (req, file, cb) {
    const filesavename = Date.now() + "-" + file.originalname;
    cb(null, filesavename);
  },
});

const uploaduserimg = multer({ storage: storageuser });
const storagegall = multer.diskStorage({
  destination: function (req, file, cb) {
    const filesave = "./public/galleryimages";
    cb(null, filesave);
  },
  filename: function (req, file, cb) {
    const filesavename = Date.now() + "-" + file.originalname;
    cb(null, filesavename);
  },
});

const uploadgall = multer({ storage: storagegall });
route.get(
  "/",
  admiddleware.adminlogout,
  accountmiddle.acountlogout,
  membermiddle.memberlogout,
  controll.home
);
route.get(
  "/home",
  admiddleware.adminlogout,
  accountmiddle.acountlogout,
  membermiddle.memberlogout,
  controll.home
);
route.get(
  "/about",
  admiddleware.adminlogout,
  accountmiddle.acountlogout,
  membermiddle.memberlogout,
  controll.about
);
route.get(
  "/participate-registration",
  admiddleware.adminlogout,
  accountmiddle.acountlogout,
  membermiddle.memberlogout,
  controll.participates
);
route.post(
  "/participate-registration",
  admiddleware.adminlogout,
  accountmiddle.acountlogout,
  membermiddle.memberlogout,
  controll.participatespost
);
route.get(
  "/audiance-registration",
  admiddleware.adminlogout,
  accountmiddle.acountlogout,
  membermiddle.memberlogout,
  controll.audiance
);
route.post(
  "/audiance-registration",
  admiddleware.adminlogout,
  accountmiddle.acountlogout,
  membermiddle.memberlogout,
  controll.audiancepost
);
route.get(
  "/blogs",
  admiddleware.adminlogout,
  accountmiddle.acountlogout,
  membermiddle.memberlogout,
  controll.blogs
);
route.get(
  "/contact",
  admiddleware.adminlogout,
  accountmiddle.acountlogout,
  membermiddle.memberlogout,
  controll.contact
);

// login route
route.get(
  "/login",
  admiddleware.adminlogout,
  accountmiddle.acountlogout,
  membermiddle.memberlogout,
  controll.login
);
route.post("/login", controll.loginpost);
// admin
route.get("/admindashboard", admiddleware.isadmin, controll.admin);
// admin blog
route.get("/admin/blogupdate/:id", admiddleware.isadmin, controll.amblogupdate);
route.get("/admin/blogdelete/:id", admiddleware.isadmin, controll.amblogdel);
route.get("/admin/blog", admiddleware.isadmin, controll.amblog);
route.post(
  "/admin/blog",
  uploads.single("blogimage"),
  admiddleware.isadmin,
  controll.amblogpost
);
// admin gallerys
route.get("/admin/gallery", admiddleware.isadmin, controll.amgallery);
route.post(
  "/admin/gallery",
  uploadgall.single("userimage"),
  admiddleware.isadmin,
  controll.amgallerypost
);
route.get("/admin/gallery/:id", admiddleware.isadmin, async (req, res) => {
  try {
    await galleymodel.findByIdAndDelete({ _id: req.params.id });
    res.redirect("/admin/gallery");
  } catch (err) {
    console.log(err);
  }
});
route.get("/admin/information", admiddleware.isadmin, controll.information);
route.post(
  "/admin/information",
  admiddleware.isadmin,
  controll.adinformationpost
);
// add users
route.get("/admin/adduser", admiddleware.isadmin, controll.adduser);
route.post(
  "/admin/adduser",
  uploaduserimg.single("userimage"),
  admiddleware.isadmin,
  controll.adduserpost
);

route.get("/admin/users", admiddleware.isadmin, controll.users);
// admin income

route.get(
  "/admin/incomedelete/:id",
  admiddleware.isadmin,
  controll.incomedelete
);
route.get("/admin/income", admiddleware.isadmin, controll.income);
route.get(
  "/admin/incomeupdate/:id",
  admiddleware.isadmin,
  controll.incomeupdate
);
route.post("/admin/income", admiddleware.isadmin, controll.adminincomepost);
route.post(
  "/admin/incomeupdate/:id",
  admiddleware.isadmin,
  controll.incomeupdatepost
);

// admin expenses
route.get("/admin/expenses", admiddleware.isadmin, controll.expenses);
route.post("/admin/expenses", admiddleware.isadmin, controll.adexpensesost);
route.get(
  "/admin/expensesdelete/:id",
  admiddleware.isadmin,
  controll.expensesdelete
);
route.get(
  "/admin/expensesupdate/:id",
  admiddleware.isadmin,
  controll.expensesupdate
);
route.post(
  "/admin/expensesupdate/:id",
  admiddleware.isadmin,
  controll.expensesupdatepost
);

route.get("/admin/logout", admiddleware.isadmin, controll.adminout);
route.get("/admin/edit", admiddleware.isadmin, controll.updatedata);
// member
route.get("/members", membermiddle.ismember, controll.member);
route.get("/member/logout", membermiddle.ismember, controll.memberlogout);
route.get("/member/income", membermiddle.ismember, controll.memberincome);
route.get("/member/expenses", membermiddle.ismember, controll.memberexpenses);
route.get("/member/users", membermiddle.ismember, controll.memberuser);
// account
route.get("/accountinfo", accountmiddle.isacount, controll.account);
route.get(
  "/account/collections",
  accountmiddle.isacount,
  controll.accountcollections
);
route.get("/account/expenses", accountmiddle.isacount, controll.acexpenses);
route.get("/account/logout", accountmiddle.isacount, controll.accountout);
route.get(
  "*/:id",
  admiddleware.adminlogout,
  accountmiddle.acountlogout,
  membermiddle.memberlogout,
  controll.errorpage
);

// member
module.exports = route;
