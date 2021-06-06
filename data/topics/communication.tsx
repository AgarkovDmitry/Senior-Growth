export const communication = {
  id: 'communication',
  name: 'Communication protocols',
  questions: [
    {
      question: 'HTTP vs HTTP 2.0',
      answer: 'The main focus of HTTP 2 is optimisation of request/response sizes.',
      children: [
        {
          question: 'Binary Protocol',
          answer: 'Data is being sent via binary format',
        },
        {
          question: 'Multiplexing',
          answer:
            "HTTP 2 uses frames and streams, therefore it allows to solve 'head-of-line blocking' issue. Client does not have to wait until big request is complete and get responses for other requests",
        },
        {
          question: 'Server push',
          answer:
            'Ability for server to presend extra response, if he knows that after first request should be sent some more',
        },
        {
          question: 'Headers compression',
          answer: 'Headers are being compressed with HPACK',
        },
        {
          question: 'Priority of requests',
          answer: 'The ability for client to set priority for request',
        },
        {
          question: 'Security',
          answer: 'Enchanced securiy due to usage of TLS encryption',
        },
        {
          question: 'Backward compatibility',
          answer: 'Allows browsers that do not support HTTP 2 to still be able to receive responses'
        }
      ],
    },
    {
      question: 'WebSockets vs Polling',
      answer: 'TBD',
      children: [
        {
          question: 'WebSockets',
          answer: 'TBD',
        },
        {
          question: 'Polling',
          answer: 'TBD',
        },
      ],
    },
    {
      question: 'RESTful API',
      answer: 'TBD',
      children: [
        {
          question: 'RESTful',
          answer: 'TBD',
        },
        {
          question: 'Maturity levels',
          answer: 'TBD',
        },
      ],
    },
    {
      question: 'GraphQL',
      answer:
        'GraphQL - in a query language, which was invited by Facebook, in order to solve problem of multiple different clients, that require data in different format.',
      children: [
        {
          question: 'pros',
          answer: (
            <>
              The main advantage of this approach is to have flexible backend,
              so that eahc client can decide the amount of data to be used;
              <br />
              Type system;
              <br />
              It has autodocument graphiQL tool where developers can build
              required query/mutation;
              <br/>
              The variable can be deprecated, and not being send, which allows us to have smooth process of refactoring
            </>
          ),
        },
        {
          question: 'cons',
          answer: (
            <>
              Some exeptional cases require manual handling, e.g. batch
              mutations;
              <br />
              N+1 request;
              <br />
              lack of control of client request, they may load too much data;
            </>
          ),
        },
      ],
    },
    {
      question: 'HTTPS',
      answer: 'This is HTTP request, which supports SSL/TLS security protocols',
      children: [
        {
          question: 'SSL/TLS',
          answer: 'The main concept behing is that client from browser asks 3rd party trustworthy organisation whether requested website is not fake and safe to use.'
        }
      ]
    },
    {
      question: 'API Documentation',
      answer: 'TBD',
      children: [
        {
          question: 'Swagger',
          answer: 'TBD',
        },
        {
          question: 'Open API',
          answer: 'TBD',
        },
        {
          question: 'Postman',
          answer: 'TBD',
        },
      ],
    },
  ],
}
