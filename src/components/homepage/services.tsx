interface ServiceProps {
    mainTitle: string;
    subTitle: string;
    description: string;
    imageUrl: string;
}

const services: ServiceProps[] = [
    {mainTitle: "Highly nutritious meat from well-fed Livestock",
        subTitle: "Healthy & Well-fed Livestock",
    description: "Our animals are raised on a rich, balanced diet, so the meat you get is healthier, tastier, and packed with natural nutrients your family needs.",
    imageUrl: "/images/pngs/service1.png"
    },
    {mainTitle: "Wholesale & Retail Sales",
        subTitle: "Wholesale & Retail Sales",
    description: "Buy in bulk or single purchases. Whether you’re stocking for events, retail, or home use, we make ordering easy and dependable.",
    imageUrl: "/images/pngs/service2.png"
    },
    {mainTitle: "Delivery Service",
        subTitle: "Delivery Service",
    description: "FREE delivery on bulk purchases within Lagos, Oyo and Ogun states. Terms and Conditions apply.",
    imageUrl: "/images/pngs/service3.png"
    },
    {mainTitle: "Buy and Keep With Us Option",
        subTitle: "Buy and Keep Option",
    description: "Reserve your livestock until celebrations, slaughter day or delivery. We’ll feed, care for, and keep it in perfect condition. Terms and Conditions apply",
    imageUrl: "/images/pngs/service4.png"
    },
    {mainTitle: "Animal Identification & Traceability",
        subTitle: "Animal Identification & Traceability",
    description: "Giving you confidence in the source, health, and quality of every animal.",
    imageUrl: "/images/pngs/service5.png"
    },
    {mainTitle: "Standard consistent pricing system",
        subTitle: "Standard consistent pricing system",
    description: "You pay a consistent price based on the animal’s exact weight in KG.",
    imageUrl: "/images/pngs/service6.png"
    },
]

const OurServices = () => {
  return (
    <section>
      <div>
        {services.map((service, index) => (
        <div>
            <p>// Why Choose Us?</p>
            <h3>What Makes Us Different.</h3>
            <div></div>
        </div>
        <div>
            <h4></h4>
        </div>
      </div>
      ))}
    </section>
  )
}

export default OurServices
