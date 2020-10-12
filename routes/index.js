const {Router} = require('express');
const router = Router();

router.get('/', (req,res) => {
	const data = {
		"name": "alguien",
		"website": "sitio web"
	}
	res.json(data);
});

module.exports = router;