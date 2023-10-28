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
        text: "This snippet showcases a streamlined approach to web data fetching using JavaScript's 'async/await'. It allows for requesting data from a URL while handling any delays or errors gracefully, ensuring a smooth web experience.",
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
        text: "Featuring a seamless gradient transition from blue to purple, this button design captures attention. Its interactive essence is highlighted by a subtle expansion upon hovering, showcasing how CSS can bring life and motion to web designs.",
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
        text: "Showcasing a basic but essential server safeguard, this script uses Express to limit users to five requests. Exceeding this limit triggers an HTTP 429 status, a proactive step towards ensuring server health and mitigating overuse risks.",
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
        text: "A prime example of React's reactive capabilities, this theme toggle component cleverly utilises the useState hook. It allows for a swift and smooth transition between light and dark themes, reflecting the dynamic nature of state management in React.",
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
        text: "By incorporating memoization, this Python function for calculating the Fibonacci sequence exemplifies high-performance computing. It minimises computational overhead by remembering past results, making the recursive process much faster and more efficient.",
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
        text: "The implementation of 'std::unique_ptr' in this example highlights the modern approach to memory management in C++. It showcases how smart pointers ensure automatic and secure resource deallocation, embodying best practices in contemporary C++ coding.",
    },
},
{
    index:3,
    title: "C#",
    introText: [
        "Amidst the diverse tapestry of programming languages, C# stands out for its streamlined development and robustness. Integrated with the .NET ecosystem, it champions versatile applications while emphasising code clarity and maintainability.",
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
        text: "The use of 'async' and 'await' in this C# code for fetching web data highlights a sophisticated approach to handling network operations. It's a perfect blend of maintaining application responsiveness and efficient data processing, critical for modern software development.",
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
        text: "Employing the 'RANK()' window function within department-based partitions, this SQL query masterfully ranks employees by salary. It’s a clear example of how to leverage SQL for detailed, context-rich analysis, providing valuable insights into organisational salary structures.",
    },
},
]

const homePageEnd = {
    content: "",
    end:  "Let's build the future together.",
};

export { webDevelopment, appDevelopment, homePageEnd };

  
  