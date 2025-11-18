import { NewsSection } from "../../assets/styles";

const newsItems = [
  {
    id: 1,
    date: "Nov 2025",
    description: (
      <>
        We were invited to present &quot;AfriCrack: Benchmarking Domain-Shift Robustness of Crack Segmentation Models in African Infrastructure&quot; as a poster at 
        <a href="https://icair.unilag.edu.ng/" target="_blank" rel="noopener noreferrer"> The International Conference on Artificial Intelligence and Robotics (ICAIR)</a>.
      </>
    ),
  },
  {
    id: 2,
    date: "Oct 2025",
    description: (
      <>
        I have just been appointed as ChairPerson 1 of the Learning, Research & Development (LRD) Board of the <a href="https://unilag.edu.ng/faculties/" target="_blank" rel="noopener noreferrer"> Faculty of Computing and Informatics, University of Lagos.</a>{' '}
      </>
    )
  },
  {
    id: 3,
    date: "Oct 2025",
    description: (
      <>
        Received a $2,500 grant to present my poster on &quot;Understanding LoRA Update Complexity Through Stable Ranks&quot;
        at the <a href="https://www.wiml.org/events/wiml-workshop-%40-neurips-2025" target="_blank" rel="noopener noreferrer"> Women in Machine Learning Workshop (WiML), NeuRIPS 2025</a>.
      </>
    ),
  },
  {
    id: 4,
    date: "Sept 2025",
    description: (
      <>
        My talk &quot;What bitsandbytes Teaches About Efficiency&quot; was accepted to <a href="https://ng.pycon.org/" target="_blank" rel="noopener noreferrer"> PyCon Nigeria 2025</a>.
      </>
    ),
  },
  {
    id: 5,
    date: "Sept 2025",
    description: (
      <>
        Attended the <a href="https://summer.rise-miccai.org/" target="_blank" rel="noopener noreferrer">How to be a Startup CTO Summer School 2025</a>, a one-week program on medical image in Postdam.
      </>
    ),
  },
  {
    id: 6,
    date: "Sept 2025",
    description: (
      <>
        Delivered a talk on &quot;Dynamics of Low-Rank Adapters in Language Models&quot; at the <a href="https://ng.pycon.org/" target="_blank" rel="noopener noreferrer"> CaCTuS Scientific Symposium</a>, marking the end of my summer internship at Max Planck. <a href="https://docs.google.com/presentation/d/1FQYHi3cvTZKPZ8NSkW646vOLWlyKP7ZKYIKjU2yCRl4/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> [Slides]</a>
      </>
    ),
  },
  {
    id: 6,
    date: "Jul 2025",
    description: (
      <>
        Completed my ML Engineering Internship at <a href="https://ng.pycon.org/" target="_blank" rel="noopener noreferrer"> Curacel</a>, and began a summer research internship at the <a href="https://docs.google.com/presentation/d/1FQYHi3cvTZKPZ8NSkW646vOLWlyKP7ZKYIKjU2yCRl4/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> Max Planck Institute for Intelligent Systems.</a>
      </>
    ),
  },
  {
    id: 7,
    date: "Apr 2025",
    description: (
      <>
        Started an ML Engineering Internship at <a href="https://ng.pycon.org/" target="_blank" rel="noopener noreferrer"> Curacel</a>, working on applied machine learning and model efficiency.
      </>
    ),
  },
  {
    id: 7,
    date: "Feb 2025",
    description: (
      <>
       Invited by <a href="https://www.rawise.org.rw/" target="_blank" rel="noopener noreferrer"> RAWISE</a> and <a href="https://www.rawise.org.rw/" target="_blank" rel="noopener noreferrer"> AFRETEC</a> and to give an inspirational talk at the International Day of Women and Girls in Science 2025 in Kigali on “Unpacking STEM Careers: Her Voice in Science.”
      </>
    ),
  },
  {
    id: 8,
    date: "Jan 2025",
    description: (
      <>
        Accepted for a research internship at the Max Planck Institute for Intelligent Systems!
      </>
    ),
  },
  {
    id: 9,
    date: "Jan 2025",
    description: (
      <>
        Received an €800 grant to attend PyCon DE & PyData 2025.
      </>
    ),
  },
  
  {
    id: 10,
    date: "Oct 2024",
    description: (
      <>
        Invited by TensorFlow Ibadan to give my talk “Building a Simple Chatbot with Rasa” after presenting it at IndabaX Nigeria 2024.
      </>
    )
  },

  {
    id: 11,
    date: "Sept 2024",
    description: (
      <>
        Gave a talk at PyCon Africa 2024 on improving efficiency in Python workflows.
      </>
    ),
  },

  {
    id: 12,
    date: "Sept 2024",
    description: (
      <>
		Presented a poster at the Weakly Supervised Computer Vision Workshop during the Deep Learning Indaba 2024, receiving a recognition award for societal relevance and impact.
      </>
    ),
  },

  {
    id: 13,
    date: "Sept 2024",
    description: (
      <>
		Presented my poster on crack detection in reinforced concrete structures at the Deep Learning Indaba 2024 and received a Best Poster Award.
      </>
    ),
  },

  {
    id: 14,
    date: "Aug 2024",
    description: (
      <>
		Completed a summer internship at ARM HoldCo.
      </>
    ),
  },

  {
    id: 15,
    date: "July 2024",
    description: (
      <>
		Hosted a hands-on workshop on “Building a Simple Chatbot with Rasa” at the AI & Robotics Lab (AIRLab), University of Lagos.
      </>
    ),
  },

  {
    id: 16,
    date: "June 2024",
    description: (
      <>
		Gave a talk on “Building a Simple Chatbot with Rasa” at IndabaX Nigeria 2024.
      </>
    ),
  },

  {
    id: 17,
    date: "June 2024",
    description: (
      <>
		Presented my first research poster, “Crack Detection in Reinforced Concrete Structures Using CNNs,” at IndabaX Nigeria 2024.
      </>
    ),
  }
];

const News = () => {
  return (
    <NewsSection id="news">
      <h1 className="text-2xl font-semibold font-serif tracking-tight">News</h1>
      <div className="mt-4 space-y-3">
        {newsItems.map((item, index) => (
          <div key={`${item.date}-${index}`} className="news-item flex items-start gap-3">
            <span className="date shrink-0 w-28 text-sm tracking-wide text-slate-600">
              {item.date}:
            </span>
            <span className="description flex-1 leading-relaxed">
              {item.description}
            </span>
          </div>
        ))}
      </div>
    </NewsSection>
  );
};

export default News;
