import express from 'express'
import updateRoutes from './updateRoutes'
import homeRoutes from './homeRoutes'

const router = express.Router()

router.use('/update', updateRoutes)
router.use('/', homeRoutes)

export = router
