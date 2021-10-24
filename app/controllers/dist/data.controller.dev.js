"use strict";

var _require = require("../models"),
    sequelize = _require.sequelize;

var db = require("../models");

var Post = db.post;
var User = db.user;
var Album = db.album;
var Comment = db.comment;
var Usercomment = db.usercomment;
var Op = db.Sequelize.Op;

exports.usersData = function _callee(req, res) {
  var results;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(User.findAll({
            include: [{
              model: Post,
              include: [{
                model: Comment,
                include: User
              }]
            }, {
              model: Album
            }]
          }));

        case 2:
          _context.t0 = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(Post.findAll({
            include: [{
              model: User
            }, {
              model: Comment
            }]
          }));

        case 5:
          _context.t1 = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(Comment.findAll({
            include: [{
              model: Post,
              include: User
            }]
          }));

        case 8:
          _context.t2 = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(Album.findAll({
            include: [{
              model: User
            }]
          }));

        case 11:
          _context.t3 = _context.sent;
          results = {
            users: _context.t0,
            posts: _context.t1,
            comments: _context.t2,
            albums: _context.t3
          };
          // res.send(data);
          res.send(results);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.populate = function _callee3(req, res) {
  var populate, users, posts, comments, albums, results;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          populate = function populate(Model, list) {
            return list.forEach(function _callee2(element) {
              return regeneratorRuntime.async(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return regeneratorRuntime.awrap(Model.create(element).then(function (data) {// res.send(data)
                      })["catch"](function (err) {
                        res.status(500).send({
                          message: err.message || "Some error occurred while creating the User."
                        });
                      }));

                    case 2:
                      return _context2.abrupt("return", _context2.sent);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              });
            });
          };

          users = [{
            name: 'Reagan',
            username: 'ritchie.katlynn',
            email: 'scartwright@hotmail.com',
            phone: '653-930-3220',
            website: 'https://schroeder.com/aut-nisi-non-beatae-possimus-rem-commodi-vitae.html',
            address: '76665 Yost ForgeNew Dorian, IN 39345'
          }, {
            name: 'Dallas',
            username: 'amos.ortiz',
            email: 'larkin.brionna@hotmail.com',
            phone: '(308) 436-4838',
            website: 'http://www.effertz.info/repellendus-repellat-eos-autem-aut-dolores-dolores-quos.html',
            address: '37074 Ratke Ville, FL 64486-2019'
          }, {
            name: 'Elodyberg',
            username: 'friedrich.abernathy',
            email: 'houston.price@gmail.com',
            phone: '+1-941-544-6858',
            website: 'http://www.witting.org/aut-non-inventore-dolor-aut.html',
            address: '88736 Ruecker GroveLizethberg, CA 93655'
          }, {
            name: 'Elfrieda',
            username: 'mmcglynn',
            email: 'mitchell.lexi@yahoo.com',
            phone: '(905) 872-1330',
            website: 'https://howe.com/ab-dolores-distinctio-esse-voluptatum-eligendi-rerum.html',
            address: '30910 Dominique RunYolandabury, IA 31567-8737'
          }];
          populate(User, users);
          _context3.next = 5;
          return regeneratorRuntime.awrap(User.findAll({
            raw: true
          }));

        case 5:
          users = _context3.sent;
          posts = [{
            title: 'Drone search widens for dogs trapped by La Palma eruption',
            contents: 'Drone operators on the Canary island of La Palma have launched a high-stakes effort to search for and retrieve at least four dogs who have been stranded for weeks by the continuing volcanic eruption.',
            published: true,
            userId: 1
          }, {
            title: 'South Korea launches its first homemade space rocket',
            contents: 'South Korea’s first domestically produced space rocket reached its desired altitude but failed to deliver a dummy payload into orbit in its first test launch.',
            published: true,
            userId: 1
          }, {
            title: 'Assad regime ‘siphons millions in aid’ by manipulating Syria’s currency',
            contents: 'The Syrian government is siphoning off millions of dollars of foreign aid by forcing UN agencies to use a lower exchange rate, according to new research.',
            published: true,
            userId: 1
          }, {
            title: 'Nigel Slater’s salmon with beetroot and ginger recipe',
            contents: 'Lightly season 4 chicken legs. In a shallow-sided pan – I use one 30cm in diameter – warm 3 tbsp of oil, lower in the chicken, skin side down, with kitchen tongs, then leave to cook until the skin on the underside is crisp. Turn the legs over and lightly brown the other side.',
            published: true,
            userId: 2
          }, {
            title: 'What’s the point of curly parsley?',
            contents: '“Curly parsley is not seen as glamorous, like Italian or French flat-leaf parsley, but as the garnish of the 1960s,” says Jane Scotter, who runs the revered biodynamic farm Fern Verrow in Herefordshire. “It’s just gone out of fashion, but it is by far the better tasting of the two.” And she’s in good company, with Fergus Henderson, chef and founder of St John in London, also firmly on #teamcurly. “It has substance. When chopped, it retains a bounce, a fluff, whereas flat-leaf parsley chops down to sharp shards that take over a dish in a swishing sort of way.” Fighting talk, indeed.',
            published: true,
            userId: 2
          }, {
            title: 'Nigel Slater’s salmon with beetroot and ginger recipe',
            contents: 'Peel and roughly chop 50g of ginger, then put it into the bowl of a food processor. Peel 1 large beetroot and add to the ginger, then process to a coarse paste, pouring in 120ml of groundnut oil as you go. Season with a little black pepper.\n\nCut a 500g piece of salmon in 2. Pour the dressing into a ziplock plastic bag, then add the fish and seal. Refrigerate for a couple of hours.\n\nSet the oven at 180C/gas mark 4. Remove the salmon, still coated with marinade, from the bag and place in a shallow, ovenproof dish. Season with a little salt. Cover lightly with kitchen foil, then bake in the preheated oven for 15 minutes. Remove the foil and continue to bake for a further 8 minutes.\n\nWhile the fish is cooking, trim and wash a handful of beetroot leaves, then put them in a saucepan, still wet, and cover tightly with a lid. Bring to the boil, turn the leaves once, cover again and cook for a minute or so longer, until bright and wilted.',
            published: true,
            userId: 3
          }];
          posts.map(function (e) {
            e['userId'] = users[e['userId'] - 1]['id'];
          });
          populate(Post, posts);
          _context3.next = 11;
          return regeneratorRuntime.awrap(Post.findAll({
            raw: true
          }));

        case 11:
          posts = _context3.sent;
          comments = [{
            name: 'Reagan',
            text: 'To be on the right side of history, we should all, men and women alike, stand on the side of the she-devils.',
            email: 'scartwright@hotmail.com',
            postId: 1,
            userID: 1
          }, {
            name: 'Dallas',
            text: 'What is the source of the statistic that says in 1987, only half of Americans believed wife-beating was wrong? I am deeply troubled by this statistic and would like to read further.',
            email: 'larkin.brionna@hotmail.com',
            postId: 1,
            userID: 2
          }, {
            name: 'Dallas',
            text: 'This is clearly a cock (in the sense of a chicken) and wants a hen.  There are lots of people who think like him.  And lots of hens out there to accomodate him.  The voters will decide if they want a rooster or a brooding hen.',
            email: 'larkin.brionna@hotmail.com',
            postId: 1,
            userID: 2
          }, {
            name: 'Elodyberg',
            text: 'I don’t know what deal was made with Melania so that she would show up at the State of the Union, but I have a feeling that we will not be seeing a lot of her in future months.  Melania is not stupid, and that white pantsuit sent an intentional message. I think she’s done with Donald.',
            email: 'houston.price@gmail.com',
            postId: 2,
            userID: 3
          }, {
            name: 'Elfrieda',
            text: 'The survival of our species is absolutely dependent on greater involvement in decision-making on all levels of our society by women.  It can"t happen soon enough as our male-dominated approach has already brought us to the edge of self-destruction.',
            email: 'mitchell.lexi@yahoo.com',
            postId: 2,
            userID: 4
          }, {
            name: 'Reagan',
            text: 'The sad reality may be that as much as racism is alive in America, sexism may be even livelier. What does it say that it was easier to elect a black man as president—running against an experienced legislator and war hero—than a white woman—a white woman running against an incompetent amateur and draft dodger',
            email: 'scartwright@hotmail.com',
            postId: 2,
            userID: 1
          }, {
            name: 'Dallas',
            text: 'These crazy diatribes tribes are the product of the Republican base’s celebration of misogyny and anti-political correctness— really just a thinly disguised way to endorse cultural meanness. Normal civility keeps getting further and further away, in the rear view mirror...',
            email: 'larkin.brionna@hotmail.com',
            postId: 3,
            userID: 2
          }, {
            name: 'Elodyberg',
            text: 'Conducting oneself with resolve and integrity, despite danger and defamation, until equal rights are achieved.  To me, there was always a double meaning to Women’s Suffrage.',
            email: 'houston.price@gmail.com',
            postId: 4,
            userID: 3
          }, {
            name: 'Elfrieda',
            text: 'I have never had a sister or a daughter but I know if we do not turn back those who believe they can tell a woman how to live her life, there will be far too many generations of pain.  If an elected official cannot understand this, we have a duty to remove them from power. I am a father and a husband and my sons know this.',
            email: 'mitchell.lexi@yahoo.com',
            postId: 5,
            userID: 4
          }];
          comments.map(function (e) {
            e['postId'] = posts[e['postId']]['id'];
            e['userID'] = users[e['userID'] - 1]['id'];
          });
          populate(Comment, comments);
          albums = [{
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-474-Big-Star-1-Record.jpg?w=1000',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-492-Bonnie-Raitt-Nick-of-Time.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-491-harry-styles-fine-line.jpg?w=800'],
            description: '20+ Piano Improvisations',
            userId: 1
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-467-Maxwell-Black-Summers-Night.jpg?w=1000',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-490-Linda-Ronstadt-Heart-Like-a-Wheel.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-489-Phil-Spector-Various-Artists-Back-to-Mono.jpg?w=800'],
            description: 'Utopian Ashes',
            userId: 1
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-496-Shakira-Donde-Estan-los-Ladrones.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-488-The-Stooges-The-Stooges.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-461-Bon-Iver-For-Emma.jpg?w=800'],
            description: 'Angel or Alien',
            userId: 1
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-495-Boyz-II-Men-II.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-463-Laura-Nyro-Eli-The-13th-Confession.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-462-Flying-Burrito-Brothers-The-Gilded-Palace-of-Sin.jpg?w=800'],
            description: 'Deja',
            userId: 1
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-494-THE-RONETTEs-Presenting-the-Fabulous-Ronettes.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-465-King-Sunny-Ade-Best-of-the-Classic-Years.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-464-Isley-Brothers-3x3-1.jpg?w=800'],
            description: 'Tell Me About Tomorrow',
            userId: 1
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-493-Marvin-Gaye-Here-My-Dear.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-468-The-Rolling-Stones-Some-Girls.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-466-Beach-Boys-Today.jpg?w=800'],
            description: 'Get Up Sequences Part One',
            userId: 1
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-493-Marvin-Gaye-Here-My-Dear.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-472-SZA-Ctrl.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-467-Maxwell-Black-Summers-Night.jpg?w=800'],
            description: 'Pink Noise',
            userId: 1
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-493-Marvin-Gaye-Here-My-Dear.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-471-Jefferson-Airplane-Surrealistic-Pillow.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-470-Juvenile-400-Degreez.jpg?w=800'],
            description: 'Turn Over',
            userId: 2
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-493-Marvin-Gaye-Here-My-Dear.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-477-Howlin-Wolf-Moanin-in-the-Moonlight.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-469-Manu-Chao-Clandestino.jpg?w=800'],
            description: 'Windy',
            userId: 2
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-493-Marvin-Gaye-Here-My-Dear.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-476-Kimono-My-House.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-475-sheryl-crow-sheryl-crow.jpg?w=800'],
            description: 'Nocturnal Hours',
            userId: 2
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-493-Marvin-Gaye-Here-My-Dear.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-474-Big-Star-1-Record.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-473-Daddy-Yankee-Barrio-Fino.jpg?w=800'],
            description: 'Lucy & Aaron',
            userId: 2
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-486-john-mayer-continuum-x.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-472-SZA-Ctrl.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-471-Jefferson-Airplane-Surrealistic-Pillow.jpg?w=800'],
            description: 'Seize the Power',
            userId: 3
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-485-Richard-and-Linda-Thompson-I-Want-to-See-the-bright-lights-tonight.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-496-Shakira-Donde-Estan-los-Ladrones.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-495-Boyz-II-Men-II.jpg?w=800'],
            description: 'Muvaland Vol. 2',
            userId: 3
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-500-Arcade-Fire-Funeral.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-494-THE-RONETTEs-Presenting-the-Fabulous-Ronettes.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-493-Marvin-Gaye-Here-My-Dear.jpg?w=800'],
            description: 'Scenes from Inside',
            userId: 3
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-499-Ask-Rufus-Rufus-Chaka-Khan.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-498-Suicide-Suicide.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-497-Indestructible-Beat-of-Soweto.jpg?w=800'],
            description: 'Chloe Flower',
            userId: 4
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-454-Can-Ege-Bamyasi.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-453-Nine-Inch-Nails-Pretty-Hate-Machine.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-452-Diana-Ross-and-the-Supremes-Anthology.jpg?w=800'],
            description: 'Influences',
            userId: 4
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-498-Suicide-Suicide.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-458-Jason-Isbell-Southeastern.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-451-Roberta-Flack-First-Take.jpg?w=800'],
            description: 'Faith',
            userId: 4
          }, {
            picture: 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-457-Sinead-OConnor-I-Do-Now-Want-What-I-Havent-Got.jpg?w=800',
            pictures: ['https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-456-Al-Green-Greatest-Hits.jpg?w=800', 'https://www.rollingstone.com/wp-content/uploads/2020/09/R1344-455-Bo-diddley-Bo-Diddley-AND-Go-Bo-Diddley.jpg?w=800'],
            description: 'Solid Gold U-Roy',
            userId: 4
          }];
          albums.map(function (e) {
            e['userId'] = users[e['userId'] - 1]['id'];
          });
          populate(Album, albums);
          _context3.next = 20;
          return regeneratorRuntime.awrap(User.findAll({
            include: [{
              model: Post,
              include: [{
                model: Comment,
                include: User
              }]
            }, {
              model: Album
            }]
          }));

        case 20:
          _context3.t0 = _context3.sent;
          _context3.next = 23;
          return regeneratorRuntime.awrap(Post.findAll({
            include: [{
              model: User
            }, {
              model: Comment
            }]
          }));

        case 23:
          _context3.t1 = _context3.sent;
          _context3.next = 26;
          return regeneratorRuntime.awrap(Comment.findAll({
            include: [{
              model: Post,
              include: User
            }]
          }));

        case 26:
          _context3.t2 = _context3.sent;
          _context3.next = 29;
          return regeneratorRuntime.awrap(Album.findAll({
            include: [{
              model: User
            }]
          }));

        case 29:
          _context3.t3 = _context3.sent;
          results = {
            users: _context3.t0,
            posts: _context3.t1,
            comments: _context3.t2,
            albums: _context3.t3
          };
          res.send(results);

        case 32:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.flush = function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(Comment.drop());

        case 2:
          _context4.next = 4;
          return regeneratorRuntime.awrap(Album.drop());

        case 4:
          _context4.next = 6;
          return regeneratorRuntime.awrap(Post.drop());

        case 6:
          _context4.next = 8;
          return regeneratorRuntime.awrap(Usercomment.drop());

        case 8:
          _context4.next = 10;
          return regeneratorRuntime.awrap(User.drop());

        case 10:
          Comment.sync();
          Album.sync();
          Post.sync();
          Usercomment.sync();
          User.sync();
          res.send('database emptied');

        case 16:
        case "end":
          return _context4.stop();
      }
    }
  });
};