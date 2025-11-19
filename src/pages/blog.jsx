import { BlogSection } from "../assets/styles";
import Nav from "../comp/LandingPage/nav";
import Footer from "../comp/LandingPage/footer";
import blog1 from "../assets/img/blog1.png"
import blog2 from "../assets/img/blog2.png"
import blog3 from "../assets/img/blog3.png"
import blog4 from "../assets/img/blog4.png"
import blog5 from "../assets/img/blog5.jpg"
import blog6 from "../assets/img/blog6.png"
import blog7 from "../assets/img/blog7.jpg"
import blog8 from "../assets/img/blog8.jpg"
import blog9 from "../assets/img/blog9.png"
import blog10 from "../assets/img/blog10.jpg"



const blogPosts = [
    

    {
      id: 2,
      title: "A Friendly (but Thorough) Breakdown of the LoRA Paper",
      excerpt: "Explaining \“Low-Rank Adaptation of Large Language Models\” by Hu et al. (2021)",
      author: "Zaynab Awofeso",
      // publication: "AI Mind",
      date: "June 1, 2025",
      readTime: "10 min read",
      image: blog2,
      //content: "An in-depth analysis of the top-performing models from the BraTS-Africa Challenge, focusing on glioma segmentation techniques and their performance across different MRI domains in Sub-Saharan Africa.",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/codex/a-friendly-but-thorough-breakdown-of-the-lora-paper-b77c6afa6e6f"
        }
      ]
    },

     {
      id: 6,
      title: "A Review of AccentFold: One of the Most Important Papers on African ASR",
      //excerpt: "This article will guide you step-by-step through integrating RTK Query into your project.",
      author: "Zaynab Awofeso",
      //publication: "Hashnode",
      date: "Apr 23, 2025",
      readTime: "9 min read",
      image: blog6, // <-- add an image variable for this post
      //content: "A step-by-step walkthrough of integrating RTK Query into your React project, simplifying data fetching and state management while ensuring efficiency and scalability.",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/@ZaynabAwofeso/a-review-of-accentfold-one-of-the-most-important-papers-on-african-asr-ddf8772ce44d"
        }
      ]
    },
    {
      id: 1,
      title: "\“Attention Is All You Need\” Explained",
      //excerpt: "",
      author: "Zaynab Awofeso",
      //publication: "",
      date: "Jan 11, 2025",
      readTime: "10 min read",
      image: blog1,
      //content: "",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/codex/attention-is-all-you-need-explained-ebdb02c7f4d4"
        }
      ]
    },

    {
      id: 3,
      title: "An Explanation of the Vision Transformer (ViT) Paper",
      //excerpt: "…to the one who has stopped believing in themselves.",
      author: "Zaynab Awofeso",
      // publication: "Personal Blog",
      date: "Nov 24, 2024",
      readTime: "8 min read",
      image: blog3,
      //content: "A personal reflection on dreams, aspirations, and the journey of self-belief. This piece explores the challenges of maintaining hope and motivation in the face of adversity.",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/codex/an-explanation-of-the-vision-transformer-vit-paper-8cdd399741aa"
        }
      ]
    },

    {
      id: 4,
      title: "A Summary of EfficientNet: Rethinking Model Scaling for CNNs",
      //excerpt: "A very detailed summary of my DLI 2024 experience",
      author: "Zaynab Awofeso",
      // publication: "Personal Blog",
      date: "Oct 30, 2024",
      readTime: "8 min read",
      image: blog4,
      //content: "A comprehensive account of my experience at the Deep Learning Indaba 2024, including insights from workshops, networking opportunities, and the impact on my research journey.",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/codex/a-summary-of-efficientnet-rethinking-model-scaling-for-cnns-d524d37ff8bb"
        }
      ]
    },

    {
      id: 5,
      title: "A Summary of the \“MobileNetV2: Inverted Residuals and Linear Bottlenecks\” Paper",
      //excerpt: "The Upskill Program 1.0",
      author: "Zaynab Awofeso",
      // publication: "Personal Blog",
      date: "Oct 11, 2024",
      readTime: "9 min read",
      image: blog5,
      //content: "A detailed account of my participation in Cardtonic's Upskill Program 1.0, the challenges faced, skills learned, and how I secured the MacBook prize through dedication and hard work.",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/codex/a-summary-of-the-mobilenetv2-inverted-residuals-and-linear-bottlenecks-paper-e19b187cb78a"
        }
      ]
    },

   

    {
      id: 7,
      title: "Reflecting on My Experience at the Indaba 2023",
      //excerpt: "Although ignorant of the origin, the light at the end of the tunnel remains what draws us and ignites our hope.",
      author: "Zaynab Awofeso",
      //publication: "Hashnode",
      date: "Sep 15, 2023",
      readTime: "7 min read",
      image: blog7, // <-- add an image variable for this post
      //content: "A reflective retrospective of 2022—capturing growth, uncertainty, and the enduring drive to move forward, even when the future remains unknown.",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/@ZaynabAwofeso/reflecting-on-my-experience-at-the-indaba-2023-112ee29463ae"
        }
      ]
    },

    {
      id: 8,
      title: "A Complete Guide to Sentiment Analysis Classification",
      //excerpt: "Although ignorant of the origin, the light at the end of the tunnel remains what draws us and ignites our hope.",
      author: "Zaynab Awofeso",
      //publication: "Hashnode",
      date: "Apr 26, 2023",
      readTime: "13 min read",
      image: blog8, // <-- add an image variable for this post
      //content: "A reflective retrospective of 2022—capturing growth, uncertainty, and the enduring drive to move forward, even when the future remains unknown.",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/datadriveninvestor/a-complete-guide-to-sentiment-analysis-classification-76cce6f67c46"
        }
      ]
    },
	
    {
      id: 9,
      title: "Exploring the AdventureWorks Database",
      excerpt: "Let’s go on an adventure into the amazing world of using the AdventureWorks Database!",
      author: "Zaynab Awofeso",
      //publication: "Hashnode",
      date: "Mar 6, 2023",
      readTime: "8 min read",
      image: blog9, // <-- add an image variable for this post
      //content: "A reflective retrospective of 2022—capturing growth, uncertainty, and the enduring drive to move forward, even when the future remains unknown.",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/learning-sql/eadventureworks-database-427e59144bc0"
        }
      ]
    },

    {
      id: 10,
      title: "How To Score ~80% Accuracy in Kaggle’s Spaceship Titanic Competition",
      excerpt: "This is a step-by-step guide to walk you through submitting a “.csv” file of predictions to Kaggle for the new titanic competition.",
      author: "Zaynab Awofeso",
      //publication: "Hashnode",
      date: "June 13, 2022",
      readTime: "8 min read",
      image: blog10, // <-- add an image variable for this post
      //content: "A reflective retrospective of 2022—capturing growth, uncertainty, and the enduring drive to move forward, even when the future remains unknown.",
      links: [
        {
          text: "Read on Medium",
          url: "https://medium.com/codex/how-to-score-80-accuracy-in-kaggles-spaceship-titanic-competition-using-random-forest-classifier-e7d06ce25bad"
        }
      ]
    },
];

const Blog = () => {
  return (
    <>
      <Nav />
      <BlogSection>
        <div className="blog-header">
          <h1>Blog</h1>
          <p>Thoughts, insights, and experiences from my journey in AI and technology</p>
        </div>
        
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="blog-overlay">
                {post.publication && (
                    <span className="publication-badge">{post.publication}</span>
                )}
                </div>
              </div>
              
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                
                <div className="blog-links">
                  {post.links && post.links.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="blog-link"
                    >
                      Link to Blog
                    </a>
                  ))}
                </div>
                
                <div className="blog-author">
                  <span>By {post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </BlogSection>
      <Footer />
    </>
  );
};

export default Blog;
