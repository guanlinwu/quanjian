let express = require('express'),
    path    = require('path');
let app = express();

// app.use(require('connect-history-api-fallback')({
//   verbose: true
// }));

//允许跨域
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

  console.log(req.method);
  if (req.method == 'OPTIONS') {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

/**
 * 接口 /api/TokenAuth/Authenticate
 */
app.post('/api/TokenAuth/Authenticate', (req, res) => {
  res.send(JSON.stringify('{"result":{"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6Ijg3OTA0OGZmLWMwYjMtOGY2YS03ZWMxLTM5ZGY0MjdkMzFkZCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3d3dy5hc3BuZXRib2lsZXJwbGF0ZS5jb20vaWRlbnRpdHkvY2xhaW1zL3RlbmFudElkIjoiMSIsInN1YiI6IjIiLCJqdGkiOiIzZjUxMDVlNS0yYjQ4LTRjNzktYjc5OS05ZWZmMjQyZWVhMDIiLCJpYXQiOjE0OTU4OTA2MjAsIm5iZiI6MTQ5NTg5MDYyMCwiZXhwIjoxNDk1OTc3MDIwLCJpc3MiOiJxdWFuamlhbiIsImF1ZCI6InF1YW5qaWFuIn0.9TfQL0sFHXZYs3dOcoj9zzexi4HXN2Me0uHCMX1kUnk","encryptedAccessToken":"wNYmO41/48SHNstaLVXxHCCre29BZQl1NhC6NM3R3rzpXtPQxVzH6jEzA/QhXFN5tu6Fk7pO53uppm1mVXMZgxbyRVz26dnepi/FyB6axBY+6gq1GL+uRQgoiFUCjRN2p8w6LevViwKlHyWZZJZO1DGVSjAi1m2U+og9pkHw9/Rkp3UZ8A1gKoReYXpvXHc0KFXzGY3aUxaXUOjpNPSTn4LyfFvWqGRq42yefBXGrkBTbBN3h9UXPP+25Rfae1rBCQrd8mQ0G3JHpGlVZBMKMD5RSIjWMCe3sPKe05J4ZS4x7ipM9FJHtoJ0Ev/fvM08rDbeioKKXNqOF9YqzdChxSnpsH4gsiia6e+SRx0RP0tXH4KrmOnSpoXsFj8Ri3BuCH7xWqPIr6s98zzFXJZZsWZ1Ziv2AWAYCI2LebkzTtvL5hfUsQX3tGkBUMZN0dFWJJgpL5NOLFpKPCSq+IvExHkiGcnsa9cKYNFMMBgL+vU7v3VDflhZ8pq4oG3HBqpCwOqw6KGTmquGwuU6GrROUuiwDAabcjJ0ToGp2srWLlmODn9UG2pGyJ2/akGJ+BOaDV+/dNanSLqdto8jub2gf1IpNDbrtF9uJjLNDw65LIYAoxPUeR0t4jXf7sxkH9Eg5xgDA5sVFrtZA2HfU92SX+Z3J+l310nddirRF++6yX79Su3tNgWMCuL2MFl89LxILk5zmMvxtQQukCsa2v+aOv6J0IVL/LC214CKjGq7PLTUrar01a6x6MviRLetmqCGVpdjqajgmHCc0DIPSJLUlAszKjWOAEo+x5CL4E7LtOqpSU/bBDQE5DM52VIvpxmq9dtdEY7P05eHb/hzhptncXR2QIs7J5Pl4JOa4r/h5MT397p4gkNjejkxohAaGYI58Nwd/qFm6aHpAq0s5DqRaJppbTdAi0M0+R2X8EakmShSo6O2fyGRkOKSjFQ4xMx8qhIrUare4Saupqj4JIHZPqrkqoSTfuDGelh8F+ClvSo=","expireInSeconds":86400,"userId":0},"targetUrl":null,"success":true,"error":null,"unAuthorizedRequest":false,"__abp":true}'));
});

/**
 * 接口 /api/services/app/User/GetUsers
 */
app.get('/api/services/app/User/GetUsers', (req, res) => {
  console.log(req);
  res.send(JSON.stringify('{"result":{"items":[{"name":"admin","surname":"admin","userName":"admin","fullName":"admin admin","emailAddress":"admin@defaulttenant.com","isEmailConfirmed":true,"lastLoginTime":"2017-05-27T21:10:19.606388","isActive":true,"creationTime":"2017-05-22T21:19:51.261342","id":2}]},"targetUrl":null,"success":true,"error":null,"unAuthorizedRequest":false,"__abp":true}'));
});
// app.get('*', (req, res) => {
//   console.log(req.path);
//   switch(true) {
//     case /\/api\/actlist/.test(req.path) :
//       actlistReq(req, res);
//       break;
//     case /\/api\/actdetail/.test(req.path) :
//       actdetailReq(req, res);
//       break;
//     default :
//       res.sendFile(path.join(__dirname, '../fontend/build', 'index.html'))
//   }
// });

/**
 * 活动列表请求
 */
const actlistReq = (req, res) => {
    let actlist = JSON.stringify({
        "pageNum" : 1,
        "listArr" : [
        {
            "id" : 1,
            "imgBox" : {
                "imgUrl" : "http://a.vimage1.com/upload/brand/upcb/2016/05/25/179/03589965_604x290_50.jpg",
                "title": "感受海澜之家社区",
                "desc": "一首花开不败的绝活"
            },
            "detailBox" : {
                "place" : "参厘米社区 | 5.9KM | 沙龙学院",
                "time": "6月9日 14:00",
                "favor": 200,
                "hasfavor": true,
                "price": 38,
                "category": "科技"
            }
        },
        {
            "id" : 2,
            "imgBox" : {
                "imgUrl" : "http://a.vimage1.com/upload/brand/upcb/2016/05/30/190/47011675_604x290_50.jpg",
                "title": "遇见更美的自己",
                "desc": "失踪周末咖啡"
            },
            "detailBox" : {
                "place" : "失踪周末咖啡 | 11KM | 天河学院",
                "time": "6月9日 15:00",
                "favor": 150,
                "hasfavor": false,
                "price": 500,
                "category": "娱乐"
            }
        },
        {
            "id" : 3,
            "imgBox" : {
                "imgUrl" : "http://a.vimage1.com/upload/brand/upcb/2016/05/31/83/11365515_604x290_50.jpg",
                "title": "拍照俱乐部",
                "desc": "拍照俱乐部"
            },
            "detailBox" : {
                "place" : "拍照俱乐部",
                "time": "6月20日 13:00",
                "favor": 54,
                "hasfavor": true,
                "price": "88",
                "category": "旅游"
            }
        }
    ]
  });
  res.send(actlist);
}

/**
 * 活动详情请求
 */
const actdetailReq = (req, res) => {
    let id = req.query.id;

    let actdetail = [
      {
          id : 1,
          baseInfo : {
              title: "遇见更美的自己",
              place : "参厘米社区 | 5.9KM | 沙龙学院",
              time: "6月9日 14:00"
          },
          slider: {
              content : [
                  {
                      link : "javascript:;",
                      img  : "http://pic.maizuo.com/h5PicUpload/e377b87ea71bbbae1ff8abd157b17d3c.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://pic.maizuo.com/h5PicUpload/549042566cf8e847c59e7b329948128d.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://pic.maizuo.com/h5PicUpload/086ac68557972bc4c2a8fd2d28869e8e.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://pic.maizuo.com/h5PicUpload/41ff9b55e5f38f0e2487ace4e6eb3435.jpg"
                  }
              ],
              speed           : 500,
              trackStyle       : {
                  WebkitTransform  :"translate3d(0px, 0px, 0px)",
                  transform        :"translate3d(0px, 0px, 0px)"
              },
              activeIndex      : 0,
              width            : 0,
              slideWidth       : 0,
              animating        : false,
              sliderCount      : 0
          }
      },
      {
          id : 2,
          baseInfo : {
              title: "遇见更美的自己2",
              place : "参厘米社区 | 5.9KM | 沙龙学院",
              time: "6月9日 14:00"
          },
          slider: {
              content : [
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  }
              ],
              speed           : 500,
              trackStyle       : {
                  WebkitTransform  :"translate3d(0px, 0px, 0px)",
                  transform        :"translate3d(0px, 0px, 0px)"
              },
              activeIndex      : 0,
              width            : 0,
              slideWidth       : 0,
              animating        : false,
              sliderCount      : 0
          }
      },
      {
          id : 3,
          baseInfo : {
              title: "拍照俱乐部",
              place : "拍照俱乐部",
              time: "6月9日 14:00"
          },
          slider: {
              content : [
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  },
                  {
                      link : "javascript:;",
                      img  : "http://gma.alicdn.com/simba/img/TB1_RMJJFXXXXaBXFXXSutbFXXX.jpg_q50.jpg"
                  }
              ],
              speed           : 500,
              trackStyle       : {
                  WebkitTransform  :"translate3d(0px, 0px, 0px)",
                  transform        :"translate3d(0px, 0px, 0px)"
              },
              activeIndex      : 0,
              width            : 0,
              slideWidth       : 0,
              animating        : false,
              sliderCount      : 0
          }
      }
    ];
  res.send(actdetail[id]);
};



var server = app.listen(5000, function () {
  var port = server.address().port;
  console.log('Open http://localhost:%s', port);
});
