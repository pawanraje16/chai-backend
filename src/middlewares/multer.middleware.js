import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
   
    cb(null, file.originalname) // generally originalname thevn good practise nahihe overight hota mhnun
  }
})

export const upload = multer({ storage, })