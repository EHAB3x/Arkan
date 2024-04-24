import axios from 'axios'
import Link from 'next/link';

const Categories = async() => {
    const response = await axios.get("https://ymtaz.sa/api/client/digital-guide/categories");
    const categories = await response.data.data.categories;
    return (
        <div className="flex justify-center gap-[10%]">
            <div className="cards w-[75%] flex justify-center items-center flex-wrap gap-[30px]">
                {categories.map((category)=>(
                    <Link href="/lawyers">
                        <div 
                            className="card w-[282px] h-[270px] flex  flex-col justify-around items-center rounded-[18px] bg-white" 
                            key={category.id}

                        >
                            <div className="img">
                                <img 
                                    src={category.image}
                                    alt="category-img"
                                    width={118}
                                    height={118}
                                    className="rounded-[50%]"
                                />
                            </div>
                            <div className="details text-center flex flex-col gap-2">
                                <h3 className="text-[var(--primary-text-color)] text-[20px] font-bold">{category.title}</h3>
                                <p className="text-[var(--secondary-text-color)] text-[14px] font-normal">متوفر عدد {category.lawyers_count}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Categories