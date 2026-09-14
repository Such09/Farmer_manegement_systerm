import multer from 'multer'

const storage = multer.diskStorage({
  destination: 'public/temp'
})

export const upload = multer({ storage: storage })