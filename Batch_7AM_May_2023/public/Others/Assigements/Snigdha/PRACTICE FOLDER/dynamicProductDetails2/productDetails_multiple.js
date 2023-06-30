            var containerDetails = [
                {
                    ProductName : 'Saree',
                    Price : 4000,
                    ClothType : 'Chiffon',
                    Designer : 'Urvi Botique',
                    Image :"https://dresses.com.pk/wp-content/uploads/2018/05/WhatsApp-Image-2018-05-07-at-2.38.40-AM.jpeg",
                   
                },
                {  
                    ProductName : 'kurti set',
                    Price : 1000,
                    ClothType : 'gorgette',
                    Designer : 'Uha Botique',
                    Image :"https://i.pinimg.com/originals/67/b7/5b/67b75b3939b9b7a7b36c86a3cb7c814a.jpg",
                
                },
                {
                    ProductName : 'skirt',
                    Price : 500,
                    ClothType : 'rayon',
                    Designer : 'laxmi Botique',
                    Image :"https://woclothes.com/wp-content/uploads/2020/01/580722503-1.jpg",
                
                },
                {
                    ProductName : 'jeans',
                    Price : 1000,
                    ClothType : 'stretched',
                    Designer : 'pavan Botique',
                    Image :"https://tse2.mm.bing.net/th?id=OIP.lMHv-ZKGMsUmR1cjF-rTswHaKn&pid=Api&P=0&h=180",
                
                },
                {
                    ProductName : 'half Saree',
                    Price : 8000,
                    ClothType : 'handloom',
                    Designer : 'handlooom Botique',
                    Image :"https://tse1.mm.bing.net/th?id=OIP.OPI0_z6m-eCagCYHPR0boQHaLH&pid=Api&P=0&h=180",
                
                },
                {
                    ProductName : 'frock',
                    Price : 5000,
                    ClothType : 'netted',
                    Designer : 'Urvi Botique',
                    Image :"https://www.ajoobaa.in/uploads/ajoobaa/products/gparty106-988747_l.jpeg",
                
                 },
            ]

            
            var renderProductDetails = (pData)=>{
            var mainLi = document.createElement('li');
            
            var ulTag = document.createElement('ul');
            ulTag.setAttribute('class','productDetails');

            var li1 = document.createElement('li');
            li1.innerHTML= 'Product Name : ' + pData.ProductName ;
            ulTag.append(li1);

            var li2 = document.createElement('li');
            li2 .innerHTML= 'price :' + '$' + pData.Price;
            ulTag.append(li2);

            var li3 = document.createElement('li');
            li3 .innerHTML= 'cloth Type :' + pData.ClothType;
            ulTag.append(li3);

            var li4 = document.createElement('li');
            li4.innerHTML= 'Designer :' + pData.Designer;
            ulTag.append(li4);

            var li5 = document.createElement('li');
            var imgTag = document.createElement('img');
            imgTag.setAttribute('src' , pData.Image);
            li5.append(imgTag);
            ulTag.append(li5);

            
            mainLi.append(ulTag);
            document.querySelector('.clothingContainer').append(ulTag);
            
            };

           for(var i=1; i<=containerDetails.length; i++){
            renderProductDetails(containerDetails[i]);
           }
           