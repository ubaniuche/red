import multer from 'multer'

const upload = multer({
    dest: '../public'
})

export default upload