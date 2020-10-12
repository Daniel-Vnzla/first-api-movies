const {Router} = require('express');
const router = Router();

const movies = require( './sample.json');

router.get('/', (req,res) => {
	res.json(movies);
})

router.post('/', (req,res) => {
	const id = movies.length + 1;
	const newMovie = {...req.body,id}
	if (title && rating && director && year) {
		movies.push(newMovie);
		res.json(movies);
	}else{
		res.status(500).json({error: "There was an error"})
	}
});

router.put('/:id',(req,res) => {
	const { id } = req.params;
	const {title,director,year,rating} = req.body;
	if (title && rating && director && year) {
		movies.forEach((i,movies) => {
			if (movie.id == id) {
				movie.id = id;
				movie.title = title;
				movie.director = director;
				movie.rating = rating;
			}
		})
	}else{
		res.status(500).json({error: "There was an error"})
	}
})

router.delete('/:id',(req,res) => {
	const { id } = req.params;
	movies.forEach((i,movie) => {
		if (movies.id == id) {
			movies.splice(i,1);
		}
		res.send(movie);
	})
})

module.exports= router;