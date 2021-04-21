const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryCardData = await categoryCard.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(categoryCardData);
  } catch (err) {
    res.status(500).json(err);
  }
});
  
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
    try {
      const categoryCardData = await categoryCard.findByPk(req.params.id, {
        include: [{ model: Product }],
      });
  
      if (!categoryCardData) {
        res.status(404).json({ message: 'No category found with that id!' });
        return;
      }
  
      res.status(200).json(productCardData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categoryData = await categoryCard.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id
      }
    })
    .then(categoryData => {
      if (!categoryData) {
        res.status(404).json({ message: 'No Category found with that ID.' });
        return;
      }
      res.json(categoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryCardData = await categoryCard.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryCardData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(categoryCardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
