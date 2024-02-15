// import Omlette from "../assets/images/image-omelette.jpeg";

// const Card = () => {
//   return (
//     <div className="flex justify-center align-center ">
//       <div className="bg-White w-[450px] max-[452px]:mt-0 mt-[50px] max-[452px]:mb-0 mb-0 rounded-xl max-[452px]:rounded-none p-5 max-[452px]:p-0 ">
//         <div>
//           <img
//             src={Omlette}
//             alt="omlette"
//             className="rounded-lg max-[452px]:rounded-none"
//           />
//         </div>
//         <div className="max-[452px]:px-5">
//           <p className="text-2xl font-youngSerif text-DarkCharcoal my-5">
//             Simple Omelettte Recipe
//           </p>
//           <p className="text-[10.4px] font-medium font-outfit text-WengeBrown mb-5">
//             An easy and quick dish, perfect for any meal. This classic omelette
//             combines beaten eggs cooked to perfection, optionally filled with
//             your choice of cheese, vegetables, or meats.
//           </p>
//         </div>
//         <div className="bg-RoseWhite rounded-lg py-3 px-4 max-[452px]:mx-5  ">
//           <p className="text-DarkRaspberry  text-sm font-semibold font-outfit">
//             Preparation time
//           </p>
//           <ul className="list-disc text-[10px] marker:text-DarkRaspberry pl-3 pt-2 font-outfit">
//             <li className="font-bold text-DarkCharcoal pl-2">
//               Total:{" "}
//               <span className="font-medium text-WengeBrown">
//                 Approximately 10 minutes
//               </span>
//             </li>
//             <li className="font-bold pl-2 text-DarkCharcoal">
//               Preparation:{" "}
//               <span className="font-medium text-WengeBrown">5 minutes</span>
//             </li>
//             <li className="font-bold pl-2 text-DarkCharcoal">
//               Cooking:{" "}
//               <span className="font-medium text-WengeBrown">5 minutes</span>
//             </li>
//           </ul>
//         </div>
//         <div className="py-5 max-[452px]:px-5">
//           <p className="text-xl font-youngSerif text-Nutmeg mb-3">
//             Ingredients
//           </p>
//           <ul className="list-disc px-4 marker:text-Nutmeg  font-medium text-[10px]  text-WengeBrown font-outfit">
//             <li className="font-medium text-WengeBrown py-1">2-3 large eggs</li>
//             <li className="font-medium text-WengeBrown py-1">Salt, to taste</li>
//             <li className="font-medium text-WengeBrown py-1">
//               Pepper, to taste
//             </li>
//             <li className="font-medium text-WengeBrown py-1">
//               1 tablespoon of butter or oil
//             </li>
//             <li className="font-medium text-WengeBrown py-1">
//               Optional fillings: cheese,diced vegetables, cooked meats, herbs
//             </li>
//           </ul>
//         </div>
//         <hr className="text-LightGrey" />
//         <div className="py-5 max-[452px]:px-5">
//           <p className="text-xl font-youngSerif text-Nutmeg mb-3">
//             Instructions
//           </p>
//           <ul className="list-decimal px-4 marker:text-Nutmeg font-outfit font-medium text-[10px]  text-WengeBrown">
//             <li className="font-bold text-WengeBrown py-1 px-2">
//               Beat the eggs:{" "}
//               <span className="font-medium">
//                 In a bowl, beat the eggs with a pinch of salt and pepper until
//                 they are well mixed. You can add a tablespoon of water or milk
//                 for a fluffer texture.
//               </span>
//             </li>
//             <li className="font-bold text-WengeBrown py-1 px-2">
//               Heat the pan:{" "}
//               <span className="font-medium">
//                 Place a non-stick frying pan over medium heat and add butter or
//                 oil.
//               </span>
//             </li>
//             <li className="font-bold text-WengeBrown py-1 px-2">
//               Cook the omelette:{" "}
//               <span className="font-medium">
//                 Once the butter is melted and bubbling, pour in the eggs. Tilt
//                 the pan to ensure the eggs evenly coat the surface.
//               </span>
//             </li>
//             <li className="font-bold text-WengeBrown py-1 px-2">
//               Add fillings(optional):{" "}
//               <span className="font-medium">
//                 When the eggs begin to set at the edges but are still slightly
//                 runny in the middle, sprinkle your chosen fillings over one half
//                 of the omelette.
//               </span>
//             </li>
//             <li className="font-bold text-WengeBrown py-1 px-2">
//               Fold and serve:{" "}
//               <span className="font-medium">
//                 As the omelette continues to cook, carefully lift one edge and
//                 fold it over the fillings. Let it cook for another minute, then
//                 slide it onto a plate.
//               </span>
//             </li>
//             <li className="font-bold text-WengeBrown py-1 px-2">
//               Enjoy:{" "}
//               <span className="font-medium">
//                 Serve hot, with additional salt and pepper if needed.
//               </span>
//             </li>
//           </ul>
//         </div>
//         <hr className="text-LightGrey" />
//         <div className="py-5 max-[452px]:px-5">
//           <p className="text-xl font-youngSerif text-Nutmeg mb-3">Nutrition</p>
//           <p className="text-[11px] font-medium font-outfit text-WengeBrown mb-5">
//             The table below shows nutritional values per serving without the
//             additional fillings.
//           </p>
//           <table className="table-auto w-full">
//             <tbody>
//               <tr>
//                 <td className="text-[11px] pl-[15px] font-medium font-outfit text-WengeBrown border-b-[1px] border-LightGrey py-3">
//                   Calories
//                 </td>
//                 <td className="text-[11px] font-bold font-outfit text-Nutmeg border-b-[1px] border-LightGrey ">
//                   277kcal
//                 </td>
//               </tr>
//               <tr>
//                 <td className="text-[11px] pl-[15px] font-medium font-outfit text-WengeBrown border-b-[1px] border-LightGrey py-3">
//                   Carbs
//                 </td>
//                 <td className="text-[11px] font-bold font-outfit text-Nutmeg border-b-[1px] border-LightGrey">
//                   0g
//                 </td>
//               </tr>
//               <tr>
//                 <td className="text-[11px] pl-[15px] font-medium font-outfit text-WengeBrown border-b-[1px] border-LightGrey py-3">
//                   Protein
//                 </td>
//                 <td className="text-[11px] font-bold font-outfit text-Nutmeg border-b-[1px] border-LightGrey">
//                   20g
//                 </td>
//               </tr>
//               <tr>
//                 <td className="text-[11px] pl-[15px] font-medium font-outfit text-WengeBrown border-b-[1px] border-LightGrey py-3">
//                   Fat
//                 </td>
//                 <td className="text-[11px] font-bold font-outfit text-Nutmeg border-b-[1px] border-LightGrey">
//                   22g
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Card;

import Omlette from "../assets/images/image-omelette.jpeg";

const Card = () => {
  return (
    <div className="flex justify-center align-center ">
      <div className="bg-White w-[700px] max-[452px]:mt-0 mt-28 max-[452px]:mb-0 mb-28 rounded-3xl max-[452px]:rounded-none p-10 max-[452px]:p-0 ">
        <div>
          <img
            src={Omlette}
            alt="omlette"
            className="rounded-2xl max-[452px]:rounded-none "
          />
        </div>
        <div className="max-[452px]:px-5">
          <p className="text-4xl  font-youngSerif text-DarkCharcoal mt-7 mb-5">
            Simple Omelettte Recipe
          </p>
          <p className="text-base	 font-medium font-outfit text-WengeBrown mb-5">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </div>
        <div className="bg-RoseWhite rounded-lg py-3 px-4 max-[452px]:mx-5  ">
          <p className="text-DarkRaspberry  text-lg font-semibold font-outfit">
            Preparation time
          </p>
          <ul className="list-disc text-base marker:text-DarkRaspberry pl-3 pt-2 font-outfit">
            <li className="font-bold text-DarkCharcoal pl-2">
              Total:{" "}
              <span className="font-medium text-WengeBrown">
                Approximately 10 minutes
              </span>
            </li>
            <li className="font-bold pl-2 text-DarkCharcoal">
              Preparation:{" "}
              <span className="font-medium text-WengeBrown">5 minutes</span>
            </li>
            <li className="font-bold pl-2 text-DarkCharcoal">
              Cooking:{" "}
              <span className="font-medium text-WengeBrown">5 minutes</span>
            </li>
          </ul>
        </div>
        <div className="py-5 max-[452px]:px-5">
          <p className="text-2xl font-youngSerif text-Nutmeg mb-3">
            Ingredients
          </p>
          <ul className="list-disc px-4 marker:text-Nutmeg  font-medium text-base  text-WengeBrown font-outfit">
            <li className="font-medium text-WengeBrown py-1">2-3 large eggs</li>
            <li className="font-medium text-WengeBrown py-1">Salt, to taste</li>
            <li className="font-medium text-WengeBrown py-1">
              Pepper, to taste
            </li>
            <li className="font-medium text-WengeBrown py-1">
              1 tablespoon of butter or oil
            </li>
            <li className="font-medium text-WengeBrown py-1">
              Optional fillings: cheese,diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
        <hr className="text-LightGrey" />
        <div className="py-5 max-[452px]:px-5">
          <p className="text-2xl font-youngSerif text-Nutmeg mb-3">
            Instructions
          </p>
          <ul className="list-decimal px-4 marker:text-Nutmeg font-outfit font-medium text-base  text-WengeBrown">
            <li className="font-bold text-WengeBrown py-1 px-2">
              Beat the eggs:{" "}
              <span className="font-medium">
                In a bowl, beat the eggs with a pinch of salt and pepper until
                they are well mixed. You can add a tablespoon of water or milk
                for a fluffer texture.
              </span>
            </li>
            <li className="font-bold text-WengeBrown py-1 px-2">
              Heat the pan:{" "}
              <span className="font-medium">
                Place a non-stick frying pan over medium heat and add butter or
                oil.
              </span>
            </li>
            <li className="font-bold text-WengeBrown py-1 px-2">
              Cook the omelette:{" "}
              <span className="font-medium">
                Once the butter is melted and bubbling, pour in the eggs. Tilt
                the pan to ensure the eggs evenly coat the surface.
              </span>
            </li>
            <li className="font-bold text-WengeBrown py-1 px-2">
              Add fillings(optional):{" "}
              <span className="font-medium">
                When the eggs begin to set at the edges but are still slightly
                runny in the middle, sprinkle your chosen fillings over one half
                of the omelette.
              </span>
            </li>
            <li className="font-bold text-WengeBrown py-1 px-2">
              Fold and serve:{" "}
              <span className="font-medium">
                As the omelette continues to cook, carefully lift one edge and
                fold it over the fillings. Let it cook for another minute, then
                slide it onto a plate.
              </span>
            </li>
            <li className="font-bold text-WengeBrown py-1 px-2">
              Enjoy:{" "}
              <span className="font-medium">
                Serve hot, with additional salt and pepper if needed.
              </span>
            </li>
          </ul>
        </div>
        <hr className="text-LightGrey" />
        <div className="py-5 max-[452px]:px-5">
          <p className="text-2xl font-youngSerif text-Nutmeg mb-3">Nutrition</p>
          <p className="text-base font-medium font-outfit text-WengeBrown mb-5">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="table-auto w-full">
            <tbody>
              <tr>
                <td className="text-base pl-[15px] font-medium font-outfit text-WengeBrown border-b-[1px] border-LightGrey py-3">
                  Calories
                </td>
                <td className="text-base font-bold font-outfit text-Nutmeg border-b-[1px] border-LightGrey ">
                  277kcal
                </td>
              </tr>
              <tr>
                <td className="text-base pl-[15px] font-medium font-outfit text-WengeBrown border-b-[1px] border-LightGrey py-3">
                  Carbs
                </td>
                <td className="text-base font-bold font-outfit text-Nutmeg border-b-[1px] border-LightGrey">
                  0g
                </td>
              </tr>
              <tr>
                <td className="text-base pl-[15px] font-medium font-outfit text-WengeBrown border-b-[1px] border-LightGrey py-3">
                  Protein
                </td>
                <td className="text-base font-bold font-outfit text-Nutmeg border-b-[1px] border-LightGrey">
                  20g
                </td>
              </tr>
              <tr>
                <td className="text-base pl-[15px] font-medium font-outfit text-WengeBrown border-b-[1px] border-LightGrey py-3">
                  Fat
                </td>
                <td className="text-base font-bold font-outfit text-Nutmeg border-b-[1px] border-LightGrey">
                  22g
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Card;
