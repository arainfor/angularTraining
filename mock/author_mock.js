var _ = require('underscore');

var authors = [
  {
    id: 1,
    firstName: 'J.K',
    lastName: 'Rowling',
    memo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e'
  },
  {
    id: 2,
    firstName: 'John Ronald Reuel',
    lastName: 'Tolkien',
    memo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e'

  },
  {
    id: 3,
    firstName: 'George C.R.',
    lastName: 'Martin',
    memo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e'
  },
  {
    id: 4,
    firstName: 'Robert',
    lastName: 'Ludlum',
    memo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e'
  },
  {
    id: 5,
    firstName: 'Stephen',
    lastName: 'King',
    memo: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e'
  }
];

var id = authors.length+1;

exports.list = function (req, res) {
  res.end(JSON.stringify(authors));
};

exports.create = function (req, res) {
  var author = {
    id: id++,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    memo : req.body.memo
  };
  authors.push(author);
  res.end(JSON.stringify(author));
};

exports.update = function (req, res) {
  var author = _.findWhere(authors, {id: parseInt(req.params.id)});
    if (author) {
    if (req.body.firstName) {
      author.firstName = req.body.firstName;
    }
    if (req.body.lastName) {
      author.lastName = req.body.lastName;
    }
    if (req.body.memo) {
      author.memo = req.body.memo;
    }
  } else {
    res.send('Author with id = ' + req.params.id + ' does not exists', 500);
  }
  res.end(JSON.stringify(author));
};

exports.query = function (req, res) {

  if (req.session.authors) {
    authors = req.session.authors;
  }

  var property = req.params.property;
  var value = req.params.value;
  var result = _.filter(authors, function (author) {
    return author[property] == value;
  });

  res.end(JSON.stringify(result || []));
};

exports.get = function (req, res) {

  var property = 'id';
  var value = req.params.id;
  var result = _.filter(authors, function (author) {
    return author[property] == value;
  });

  res.end(JSON.stringify(_.first(result) || {}));
};

exports.delete = function (req, res) {
  var id = req.params.id;
  authors = _.reject(authors, function (author) {
    return author.id == id;
  });
  res.end(JSON.stringify(authors || []));
};

exports.error = function (req, res) {
  res.send('Error while getting authors', 500);
};
