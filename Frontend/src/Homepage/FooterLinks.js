import React from 'react'
import '../Styles/HomeStyles/FooterLinks.css'
import { FooterLinkCard } from './FooterLinkCard';


const FooterLinksData = [
    {
      title: "Men",
      links: [
        "Shirts for Men", "Casual Shirts for Men","Formal Shirts for Men","Hoodies for Men"," Cotton Shirts for Men", "T Shirts for Men","Polo T shirts", "Kurta Pajama for Men" , "White Shirt", "Black Shirt", "Lower for Men", "Trousers for Men" , "Jacket for Men","Formal Pants for Men","Tracksuit for Men","Jeans for Men","Kurta Payjama Sets","Kurta for Men","Blazer for Men","Sweater for Men"
      ],
    },
    {
      title: "Women",
      links: [
        "Tops for Women" , "Kurti" , "Cotton Sarees ", "Georgette Sarees ", "Chiffon Sarees" ," Net Sarees ", "Dresses for Women ", "Jumpsuit for Women" , "Jeans for Women" , "Salwar Suit ", "Bra" ," Jacket for Women ", "Night Dress for Women ", "Sweatshirt for Women" , "Shorts for Women ", "Readymade Blouse ", "Dupatta" ," T Shirt for Women" , "Shirts for Women ", "Skirts for Women" , "Ethnic wear for Women" , "Western Dresses for Women" ," Leggings for Women"
      ],
    },
    {
      title: "Footwear",
      links: [
        " Men's Footwear" ,"Casual Shoes for Men" ,"Formal Shoes for Men" ," Loafers for Men","Slippers for Men", "Boots for Men" ,"Sandals for Men" ,"Footwear for Women", "Heels for Women","Sandals for Women", "Shoes for Women" ,"Sandals for Women","Slippers for Women","Boots for Women","Jutti for Women" ,"Sports Shoes for Women"
      ],
    },
    {
      title: "Home & Kitchen",
      links: [
        "Wall Painting", "Wall Stickers", "Dream Catcher", "Rangoli Designs", "Clock", "Wall Clock", "Alarm Clock", "Diya", "Bean Bag", "Laptop Table", "Study Table", "Wall Hanging", "Ceiling Lights", "Table Lamp", "Hanging Lights", "LED Bulbs", "Torch Light", "LED Lights", "Flower Vase", "Keychain", "Rudraksha", "Screwdriver"
      ],
    },
    {
      title: "Watch",
      links: [
        "Watch For Men","Womens Watches","Smart Watch","Boys Watch","Girls Watch"
      ],
    },
    {
      title: "Home Furnishing",
      links: [
       " Bed Sheet"," Mosquito Net", "Mattress"," Curtains"," Sofa Cover", "Blanket", "Pillow", "Carpet", "Apron", "Quilt"," Floor Mat", "Towel", "Pillow Cover"
      ],
    },
    {
      title: "Electonics",
      links: [
        "Bluetooth Speakers", "Headphones", "Earphone", "Ceiling Fan", "Geysers", "Trimmer", "Hair Straightener", "Hair Dryer", "Water Purifier", "Mixer Grinder", "Gas Stove", "Electric Kettle", "Computer Mouse", "Computer Keyboard", "USB", "HDMI Cables", "Computer Antivirus"
      ],
    },
    {
      title: "Mobiles Accessories",
      links: [
        "Mobile Covers","Leather Mobile Covers", "Printed Back Covers","Tempered Glass"
      ],
    }
   
  ];
export const FooterLinks = () => {
    return (
        <div className="Footer-links">
          <div className="Footer-links-container">
            {FooterLinksData.map((item, i) => {
              return <FooterLinkCard key={i} title={item.title} links={item.links} />;
            })}
          </div>
        </div>
      );
    };