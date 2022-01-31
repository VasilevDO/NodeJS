const {Router} = require ('express');
const config = require ('config');

const router=Router();

router.post('/',
    async (req,res) => {
        console.log(req.body)
        try {
            res.status(200).json({message:`Your dick is ${req.body.dick}`})
        } catch (e) {
            res.status(500).json({message:'Something went wrong'})
        }
    }
)

router.get('/',
    async (req,res) => {
        try {
            return res.status(200).json({message:'big'})
        } catch (e) {
            return res.status(500).json({message:'Something went wrong'})
        }
    }
)

module.exports=router;