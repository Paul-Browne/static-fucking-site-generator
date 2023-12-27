export default ({
    head = [
        {
            colspan: 1,
            content: "hello!"
        },
        {
            colspan: 2,
            content: "world!"
        },
        {
            content: "foo"
        }
    ],
    body = [
        [
            "first", 
            "second", 
            "third", 
            "fourth"
        ],
        [
            {
                colspan: 2,
                content: "hello!"
            },
            {
                colspan: 1,
                content: "world!"
            },
            {
                content: "foo"
            }
        ],
        [
            {
                colspan: 2,
                content: "hello!"
            },
            {
                colspan: 1,
                content: "world!"
            },
            {
                content: "foo"
            }
        ],
        [
            {
                colspan: 2,
                content: "hello!"
            },
            {
                colspan: 1,
                content: "world!"
            },
            {
                content: "foo"
            }
        ],
        [
            {
                colspan: 2,
                content: "hello!"
            },
            {
                colspan: 1,
                content: "world!"
            },
            {
                content: "foo"
            }
        ],
        [
            {
                colspan: 2,
                content: "hello!"
            },
            {
                colspan: 1,
                content: "world!"
            },
            {
                content: "foo"
            }
        ]
    ],
    foot = [
        {
            content: "seventy!"
        },
        {
            content: "amazing!"
        },
        {
            colspan: 2,
            content: "dictionaries"
        }
    ]
} = {}) => {
    return `<table>
        ${head ? `<thead><tr>${head.map(el => typeof el == "string" ? `<th>${el}</th>` : `<th ${el.colspan ? `colspan=${el.colspan}` : ""}>${el.content}</th>`).join("")}</tr></thead>` : ""}
        ${body ? `<tbody>${body.map(row => `<tr>${row.map(el => typeof el == "string" ? `<td>${el}</td>` : `<td ${el.colspan ? `colspan=${el.colspan}` : ""}>${el.content}</td>`).join("")}</tr>`).join("")}</tbody>` : ""}
        ${foot ? `<tfoot><tr>${foot.map(el => typeof el == "string" ? `<td>${el}</td>` : `<td ${el.colspan ? `colspan=${el.colspan}` : ""}>${el.content}</td>`).join("")}</tr></tfoot>` : ""}
    </table>`
}