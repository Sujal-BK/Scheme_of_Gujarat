import express from 'express'

import { addScheme, deleteScheme, getAllScheme, getSchemeById, updateScheme } from '../Controller/scheme.controller.js'

const router = express.Router()

router.post('/add-scheme',addScheme)

router.get('/get-scheme',getAllScheme)

router.get('/get-scheme/:id',getSchemeById)

router.put('/update-scheme/:id',updateScheme)

router.delete('/delete-scheme/:id',deleteScheme)


export default router