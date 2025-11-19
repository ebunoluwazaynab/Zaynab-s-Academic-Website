import { NewsSection } from "../../assets/styles";

const newsItems = [
  {
    id: 1,
    date: "Nov 2025",
    description: (
      <>
        We were invited to present &quot;AfriCrack: Benchmarking Domain-Shift Robustness of Crack Segmentation Models in African Infrastructure&quot; as a poster at <a href="https://icair.unilag.edu.ng/" target="_blank" rel="noopener noreferrer"> The International Conference on Artificial Intelligence and Robotics (ICAIR)</a>.
      </>
    ),
  },
  {
    id: 2,
    date: "Oct 2025",
    description: (
      <>
        I have just been appointed as <b>ChairPerson 1 of the Learning, Research & Development (LRD) Board</b> of the <a href="https://unilag.edu.ng/faculties/" target="_blank" rel="noopener noreferrer"> Faculty of Computing and Informatics, University of Lagos.</a>{' '}
      </>
    )
  },
  {
    id: 3,
    date: "Sept 2025",
    description: (
      <>
        Our paper &quot;Understanding LoRA Update Complexity Through Stable Ranks&quot; was accepted to 
        the <a href="https://www.wiml.org/events/wiml-workshop-%40-neurips-2025" target="_blank" rel="noopener noreferrer"> Women in Machine Learning Workshop (WiML) at NeurIPS 2025</a>. I received a $2,500 travel grant from WiML to present it at the workshop.
      </>
    ),
  },
  {
    id: 4,
    date: "Sept 2025",
    description: (
      <>
        My talk &quot;What bitsandbytes Teaches About Efficiency&quot; was accepted to <a href="https://ng.pycon.org/" target="_blank" rel="noopener noreferrer"> PyCon Nigeria 2025</a>!
      </>
    ),
  },
  {
    id: 6,
    date: "Sept 2025",
    description: (
      <>
        Delivered a talk on &quot;Dynamics of Low-Rank Adapters in Language Models&quot; at the <a href="https://is.mpg.de/events/2025-cactus-scientific-symposium" target="_blank" rel="noopener noreferrer"> CaCTuS Scientific Symposium</a> to mark the completion of my summer internship at the Max Planck Institute. <a href="https://docs.google.com/presentation/d/18uqITOVeW9Gj61Dk0g8nYXG2ma2QfVfEYnuHEXa_faI/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> [Slides]</a>
      </>
    ),
  },
  {
    id: 6,
    date: "Jul 2025",
    description: (
      <>
        Completed my ML Engineering Internship at <a href="https://www.curacel.co/" target="_blank" rel="noopener noreferrer"> Curacel</a>, and began a summer research internship at the <a href="https://is.mpg.de/" target="_blank" rel="noopener noreferrer"> Max Planck Institute for Intelligent Systems.</a>
      </>
    ),
  },
  {
    id: 7,
    date: "Apr 2025",
    description: (
      <>
        I joined <a href="https://www.curacel.co/" target="_blank" rel="noopener noreferrer"> Curacel</a> as an ML Engineering Intern. I will be working on applied machine learning and model efficiency.
      </>
    ),
  },
  {
    id: 7,
    date: "Feb 2025",
    description: (
      <>
       I was invited to give an inspirational talk at Rwanda’s International Day of Women and Girls in Science celebration hosted by <a href="https://www.rawise.org.rw/" target="_blank" rel="noopener noreferrer"> RAWISE</a> and <a href="https://www.rawise.org.rw/" target="_blank" rel="noopener noreferrer"> AFRETEC</a>. 
      </>
    ),
  },
  {
    id: 8,
    date: "Jan 2025",
    description: (
      <>
        Accepted for a research internship at the <a href="https://is.mpg.de/" target="_blank" rel="noopener noreferrer"> Max Planck Institute for Intelligent Systems.</a>
      </>
    ),
  },
  {
    id: 10,
    date: "Oct 2024",
    description: (
      <>
        Invited by <a href="https://www.meetup.com/tensorflow-ibadan/" target="_blank" rel="noopener noreferrer">TensorFlow Ibadan</a> to give my talk “Building a Simple Chatbot with Rasa”. <a href="https://docs.google.com/presentation/d/1Ux3QbiPwNB44XnXGcmtcVAVubfIgtTRmqsNtW5idHCw/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> [Slides]</a>
      </>
    )
  },

  {
    id: 11,
    date: "Sept 2024",
    description: (
      <>
        Gave a talk at <a href="https://africa.pycon.org/2024/" target="_blank" rel="noopener noreferrer">PyCon Africa 2024</a> on improving efficiency in Python workflows.
      </>
    ),
  },

  {
    id: 12,
    date: "Sept 2024",
    description: (
      <>
		Invited to present our poster, "Crack Detection in Reinforced Concrete Structures," at the <a href="" target="_blank" rel="https://wscv-indaba.github.io/2024.html"> Weakly Supervised Computer Vision Workshop</a> during the Deep Learning Indaba 2024. Received a recognition award for societal relevance and impact.
      </>
    ),
  },

  {
    id: 13,
    date: "Sept 2024",
    description: (
      <>
		Won a <b>Best Poster Award</b> at <a href="https://deeplearningindaba.com/" target="_blank" rel="noopener noreferrer">Deep Learning Indaba</a> 2024 for presenting "Crack Detection in Reinforced Concrete Structures".
      </>
    ),
  },

  {
    id: 15,
    date: "July 2024",
    description: (
      <>
		Invited by the <a href="https://airol.unilag.edu.ng/" target="_blank" rel="noopener noreferrer">AI & Robotics Lab (AIRLab), University of Lagos</a> to host a hands-on workshop on my talk “Building a Simple Chatbot with Rasa.” It was exciting to teach it again in a more practical, interactive format.  <a href="https://indabaxng.github.io/" target="_blank" rel="noopener noreferrer">Deep Learning IndabaX Nigeria</a> 2024. <a href="https://docs.google.com/presentation/d/1Ux3QbiPwNB44XnXGcmtcVAVubfIgtTRmqsNtW5idHCw/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> [Slides]</a>
      </>
    ),
  },

  {
    id: 16,
    date: "June 2024",
    description: (
      <>
		Gave a talk on “Building a Simple Chatbot with Rasa” at <a href="https://indabaxng.github.io/" target="_blank" rel="noopener noreferrer">Deep Learning IndabaX Nigeria</a> 2024. <a href="https://docs.google.com/presentation/d/1Ux3QbiPwNB44XnXGcmtcVAVubfIgtTRmqsNtW5idHCw/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> [Slides]</a>
      </>
    ),
  },

  {
    id: 17,
    date: "June 2024",
    description: (
      <>
		Presented my first-ever research poster, “Crack Detection in Reinforced Concrete Structures Using CNNs,” at <a href="https://indabaxng.github.io/" target="_blank" rel="noopener noreferrer">Deep Learning IndabaX Nigeria</a> 2024.
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
