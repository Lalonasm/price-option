import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Starter",
            "price": 20,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 40,
            "features": [
                "Access to all Starter features",
                "Group fitness classes included",
                "Personal training session per month",
                "Access to swimming pool",
                "Access to sauna"
            ]
        },
        {
            "id": 3,
            "name": "Plus",
            "price": 60,
            "features": [
                "Access to all Standard features",
                "Unlimited personal training sessions",
                "Access to tennis courts",
                "Access to basketball court",
                "Discounts on merchandise"
            ]
        },
        {
            "id": 4,
            "name": "Premium",
            "price": 100,
            "features": [
                "Access to all Plus features",
                "Massage therapy session per month",
                "Nutrition consultation",
                "Exclusive member events",
                "Free guest passes per month"
            ]
        }
    ]
    return (
        <div className="m-12">
            <h3 className="text-3xl text-center">Best Prices in the Town</h3>
            <div className="grid md:grid-cols-4 gap-4 border-slate-600 ">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;