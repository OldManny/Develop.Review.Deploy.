import { FaCentos } from 'react-icons/fa';
import { TbCodeDots, TbDeviceIpadHorizontalCode } from "react-icons/tb";
import { PiPaintBrushLight } from "react-icons/pi";
import { VscServerProcess } from "react-icons/vsc";
import { SiReactquery } from "react-icons/si";
import { BsJournalCode, BsDatabaseCheck } from "react-icons/bs";

const webDevelopment = [
{
    index:1,
    introText: [
        "Web development is like assembling a puzzle - each piece, a unique technology, coming together to form a bigger picture. It’s where creativity meets code, bringing ideas to life on screen.",
        // ... more lines
    ],
    codeCardData: {
        language: "javascript",
        languageLabel: "JavaScript",
        codeString: `
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}
    `,
    },
    textCardData: {
        icon: FaCentos,
        title: "Asynchronous Data Retrieval",
        text: "In the era of dynamic web content, efficiently fetching and processing data is paramount. This snippet showcases the use of modern async/await syntax for cleaner, more readable asynchronous code. It incorporates error handling, ensuring that network hiccups or unexpected issues don't derail the user experience.",
    },
},
{
    index:2,
    title: "Cascading Style Sheets",  // New optional field
    introText: [
        " CSS is the artist's palette of the web. It infuses aesthetics, animation, and responsiveness, ensuring that every pixel aligns with the creator's vision.",
        // ... more lines
        ],
    codeCardData: {
        language: "css",
        languageLabel: "CSS",
        codeString: `
.button-gradient {
    background: linear-gradient(45deg, #3498db, #9b59b6);
    padding: 10px 20px;
    border: none;
    border-radius: 25px;
    transition: transform 0.2s;
    cursor: pointer;
}

.button-gradient:hover {
    transform: scale(1.1);
}            
    `,
    },
    textCardData: {
        icon: PiPaintBrushLight,
        title: "The Gradient Button with Interactive Lure",
        text: "This CSS design showcases a captivating button enhanced by a gradient flow, transitioning from a deep blue to a lively purple. What elevates its appeal is the hover effect: the button subtly expands, inviting users for a click. A clear demonstration of the versatility and charm CSS transitions and gradients offer.",
        },
},
{
    index:3,
    title: "Node",
    introText: [
        "Node expands JavaScript's realm beyond browsers, bridging the gap between frontend and backend. Its event-driven architecture ensures efficient data handling, making real-time applications, like chatbots and online games, a reality.",
        // ... more lines
        ],
    codeCardData: {
        language: "javascript",
        languageLabel: "Node.js",
        codeString: `
const express = require('express');
const app = express();

let requestCounter = 0;

app.use((req, res, next) => {
    requestCounter++;
    if (requestCounter > 5) {
        return res.status(429).send('Too many requests');
    }
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the portfolio server!');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});           
    `,
    },
    textCardData: {
        icon: VscServerProcess,
        title: "Rate Limiter Middleware",
        text: "In a time when server protection against malicious or unintentional overuse is paramount, rate limiting emerges as a cardinal feature. This sample succinctly illustrates an Express middleware that imposes a rudimentary rate limit: if a client exceeds five requests, they're promptly halted with an HTTP 429 status. This showcases not only a protective measure against potential denial-of-service attacks but also underlines a developer's proactive approach to server health and resource optimization.",
        },
    },
{
    index:4,
    title: "React",
    introText: [
        "In the pursuit of seamless user experiences, React emerges as a game-changer. With its component-based architecture, it ensures efficient updates and rendering, making single-page feel smoother than ever.",
        "",
        ""
        // ... more lines
        ],
    codeCardData: {
        language: "javascript",
        languageLabel: "React.js",
        codeString: `
import React, { useState } from 'react';

const ThemeButton = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? 'Switch to Dark Mode' : 
'Switch to Light Mode'}
        </button>
    );
}

export default ThemeButton;                  
    `,
    },
    textCardData: {
        icon: SiReactquery,
        title: "Toggle Theme Button",
        text: "Delve into the essence of React's functional components with this theme switcher. Utilizing the 'useState' hook, this component effortlessly alternates between light and dark modes, exemplifying the reactive nature of the framework. The concise code effectively highlights the transformative power of state management in React, seamlessly enhancing user experience.",
    },
},
]

const appDevelopment = [
{
    index:1,
    introText: [
        "Desktop Engineering is where timeless legacies are built. Leveraging the strengths of various programming languages, we create applications that aren’t just functional, but are cornerstones in the user's daily digital journey.",
        // ... more lines
        ],
    codeCardData: {
        language: "python",
        languageLabel: "Python",
        codeString: `
def fibonacci(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    return memo[n]

print(fibonacci(10))    
    `,
    },
    textCardData: {
        icon: BsJournalCode,
        title: "Fibonacci Series with Memoization in Python",
        text: "Beyond simple recursion lies the transformative power of memoization, a technique pivotal to enhancing algorithmic efficiency. This Fibonacci sequence implementation optimally reduces time complexity by circumventing repeated calculations, manifesting a nuanced appreciation for high-performance computational solutions.",
    },
},
{
    index:2,
    title: "C++",
    introText: [
        "Charting the course of modern computational solutions, C++ boasts a legacy that is rooted in performance and scalability. With its dual embrace of low-level hardware access and high-level design patterns, it serves as the cornerstone for countless software systems.",
        // ... more lines
        ],
    codeCardData: {
        language: "cpp",
        languageLabel: "cpp",
        codeString: `
#include <iostream>
#include <memory>

class MyClass {
public:
    void display() {
        std::cout << "MyClass object!" << std::endl;
    }
};

int main() {
    std::unique_ptr<MyClass> 
    ptr = std::make_unique<MyClass>();
    ptr->display();
}            
    `,
    },
    textCardData: {
        icon: TbCodeDots,
        title: "Smart Pointer Usage",
        text: "As C++ evolved, so did its memory management paradigms. The introduction of smart pointers heralded a new era of robustness. When one harnesses 'std::unique_ptr', like in the code above, it's not just about automated memory management—it's a tacit acknowledgment of the importance of ownership semantics in modern C++. Using smart pointers is not just technical—it's a statement about code quality, resilience, and the developer's commitment to modern best practices.",
    },
},
{
    index:3,
    title: "C#",
    introText: [
        "Amidst the diverse tapestry of programming languages, C# stands out for its streamlined development and robustness. Integrated with the .NET ecosystem, it champions versatile applications while emphasizing code clarity and maintainability.",
        // ... more lines
        ],
    codeCardData: {
        language: "csharp",
        languageLabel: "csharp",
        codeString: `
using System.Net.Http;
using System.Threading.Tasks;

public class WebService {
    private readonly HttpClient _client = new HttpClient();

    public async Task<string> 
    FetchDataAsync(string url) 
    {
        HttpResponseMessage response = 
            await _client.GetAsync(url);
        response.EnsureSuccessStatusCode();
        return await response.Content.ReadAsStringAsync();
    }
}             
    `,
    },
    textCardData: {
        icon: TbDeviceIpadHorizontalCode,
        title: "Asynchronous Programming with async and await",
        text: "While the digital world thrives on immediacy, C# took a groundbreaking stride with its 'async' and 'await' semantics. This example doesn't merely highlight asynchronous web requests. It manifests the developer's cognizance of the critical balance between responsiveness and performance. Leveraging asynchronous programming isn't just about reducing wait times—it's a deliberate strategy to enhance user experience while optimizing resource utilization, showcasing a developer's pursuit of both user delight and operational efficiency.",
    },
},
{
    index:4,
    title: "SQL",
    introText: [
        "As data becomes the heartbeat of modern enterprises, SQL stands as its interpreter. Harnessing the power of relational databases, SQL transforms raw data into meaningful narratives, enabling informed business strategies.",
        // ... more lines
        ],
    codeCardData: {
        language: "sql",
        languageLabel: "SQL",
        codeString: `
SELECT
    employee_id,
    department,
    salary,
    RANK() OVER
        (PARTITION BY department ORDER BY salary DESC) 
        AS rank_in_department
FROM
    employees;           
    `,
    },
    textCardData: {
        icon: BsDatabaseCheck,
        title: "Window Functions and Ranking",
        text: "At the heart of data analysis lies the quintessential need to segment, rank, and dissect datasets based on varying criteria. Window functions in SQL provide a powerful toolkit for this. The example isn’t just a demonstration of ranking employees by salary within their respective departments. It’s a testament to the developer’s skill in understanding the intricate of partitioning data while preserving the context. By using 'RANK()', this query showcases the art of drawing actionable insights from seemingly mundane data sets.",
    },
},
]

const homePageEnd = {
    content: "In the ever-evolving tapestry of the digital realm, I carve out my niche by blending creativity with functionality. This portfolio stands as a testament to my journey, where each project is a chapter of dedication, insight, and passion.",
    end:  "Let's build the future together.",
};

export { webDevelopment, appDevelopment, homePageEnd };

  
  