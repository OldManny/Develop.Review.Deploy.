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
        "Bringing a website to life involves using various technologies, fitting them together to create a smooth, user-friendly experience. It's a balance of logic and creativity."
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
        text: "This snippet shows a streamlined approach to web data fetching using JavaScript's 'async/await'. It allows for requesting data from a URL while handling any delays or errors gracefully."
    },
},
{
    index:2,
    title: "Cascading Style Sheets",  // New optional field
    introText: [
        "CSS adds the style and structure to a webpage, making sure the layout looks clean, responsive, and aligned with the design goals."
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
        title: "The Gradient Button",
        text: "A gradient transition from blue to purple and a hover-induced scale effect give this button a visually appealing and interactive quality, showcasing how CSS can add subtle yet effective animations."
        },
},
{
    index:3,
    title: "Node",
    introText: [
        "Node.js extends JavaScript's capabilities to the server side, allowing seamless interaction between the frontend and backend. Its event-driven model supports efficient data processing, ideal for real-time applications."
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
        text: "Showcasing a basic but essential server safeguard, this script uses Express to limit users to five requests. Exceeding this limit triggers an HTTP 429 status, a proactive step towards ensuring server health and mitigating overuse risks."
        },
    },
{
    index:4,
    title: "React",
    introText: [
        "React's component-based structure simplifies the process of building interactive user interfaces, allowing for efficient updates and rendering, which helps create smooth single-page applications."
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
        text: "A prime example of React's capabilities, this theme toggle component which utilises the useState hook. It allows for a quick and smooth transition between light and dark themes, reflecting the dynamic nature of state management in React."
    },
},
]

const appDevelopment = [
{
    index:1,
    introText: [
        "Desktop Engineering focuses on building reliable applications using various programming languages, ensuring they provide users with stable and efficient applications."
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
        title: "Fibonacci with Memoization in Python",
        text: "By incorporating memoization, this Python function for calculating the Fibonacci sequence demonstrates high-performance computing. It minimises computational overhead by remembering past results, making the recursive process much faster and more efficient."
    },
},
{
    index:2,
    title: "C++",
    introText: [
        "Known for its efficiency, C++ combines low-level hardware access with high-level design features, making it ideal for building scalable and high-performance software."
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
        text: "The implementation of 'std::unique_ptr' in this example highlights the approach to memory management in C++. It shows how smart pointers ensure automatic and secure resource deallocation."
    },
},
{
    index:3,
    title: "C#",
    introText: [
        "As part of the .NET ecosystem, C# simplifies development with its strong support for clarity and maintainability, making it a great choice for building a wide range of applications."
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
        title: "Asynchronous Programming",
        text: "The use of 'async' and 'await' in this C# code for fetching web data highlights a smooth approach to handling network operations. It's a perfect combination of responsiveness and efficient data processing."
    },
},
{
    index:4,
    title: "SQL",
    introText: [
        "SQL provides the tools to efficiently manage and analyze data in relational databases, making it easier for businesses to extract valuable information for strategic planning."
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
        text: "Employing the 'RANK()' window function within department-based partitions, this SQL query successfully ranks employees by salary. It’s a clear example of how to leverage SQL for detailed analysis, providing valuable insights."
    },
},
]

const homePageEnd = {
    content: "",
    end:  "Let's build the future together.",
};

export { webDevelopment, appDevelopment, homePageEnd };

  
  