import endPoints from '@services/api';
import useFetch from '@hooks/useFetch';
import { Chart } from '@common/Chart';
import { data } from 'autoprefixer';
const PRODUCT_LIMIT = 5;
const PRODUCT_OFSET = 5;

export default function Dashboard() {
  const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, PRODUCT_OFSET));
  const categoryNames = products?.map((prod) => prod.category);
  const categoryCount = categoryNames?.map((cat) => cat.name);
  const countOcurrences = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
  const data = {
    datasets: [
      {
        label: 'Cateogries',
        data: countOcurrences(categoryCount),
        borderWidth: 2,
        backgroundColor: ['#ffbb11', '#c0c0c0', '#50af95', 'f3ba2f', '2a71b0'],
      },
    ],
  };
  return (
    <>
      <Chart chartData={data} />
    </>
  );
}
