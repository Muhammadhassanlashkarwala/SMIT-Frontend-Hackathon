
// import React, { useState } from "react";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import AdminLayout from "./Layout";

// const RequestManager = () => {
//   const [requests, setRequests] = useState([
//     { id: 1, name: "Request 1", status: "pending" },
//     { id: 2, name: "Request 2", status: "accepted" },
//     { id: 3, name: "Request 3", status: "rejected" },
//     { id: 4, name: "Request 4", status: "pending" },
//   ]);

//   const [filter, setFilter] = useState("all"); // all, pending, accepted, rejected

//   const handleAccept = (id) => {
//     setRequests((prevRequests) =>
//       prevRequests.map((request) =>
//         request.id === id ? { ...request, status: "accepted" } : request
//       )
//     );
//   };

//   const handleReject = (id) => {
//     setRequests((prevRequests) =>
//       prevRequests.map((request) =>
//         request.id === id ? { ...request, status: "rejected" } : request
//       )
//     );
//   };

//   const filteredRequests = requests.filter((request) => {
//     if (filter === "all") return true;
//     return request.status === filter;
//   });

//   return (
//     <AdminLayout>
//       <div className="p-4">
//         <h1 className="text-2xl font-bold mb-4">Request Manager</h1>

//         {/* Filter Buttons */}
//         <div className="flex gap-2 mb-4">
//           <Button
//             variant={filter === "all" ? "default" : "outline"}
//             onClick={() => setFilter("all")}
//           >
//             All
//           </Button>
//           <Button
//             variant={filter === "pending" ? "default" : "outline"}
//             onClick={() => setFilter("pending")}
//           >
//             Pending
//           </Button>
//           <Button
//             variant={filter === "accepted" ? "default" : "outline"}
//             onClick={() => setFilter("accepted")}
//           >
//             Accepted
//           </Button>
//           <Button
//             variant={filter === "rejected" ? "default" : "outline"}
//             onClick={() => setFilter("rejected")}
//           >
//             Rejected
//           </Button>
//         </div>

//         {/* Request Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredRequests.map((request) => (
//             <Card key={request.id}>
//               <CardHeader>
//                 <CardTitle>{request.name}</CardTitle>
//                 <CardDescription>
//                   Status:{" "}
//                   <Badge
//                     variant={
//                       request.status === "pending"
//                         ? "secondary"
//                         : request.status === "accepted"
//                         ? "success"
//                         : "destructive"
//                     }
//                   >
//                     {request.status}
//                   </Badge>
//                 </CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p>This is a sample request description.</p>
//               </CardContent>
//               <CardFooter className="flex gap-2">
//                 {request.status === "pending" && (
//                   <>
//                     <Button onClick={() => handleAccept(request.id)}>
//                       Accept
//                     </Button>
//                     <Button
//                       variant="destructive"
//                       onClick={() => handleReject(request.id)}
//                     >
//                       Reject
//                     </Button>
//                   </>
//                 )}
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </AdminLayout>
//   );
// };

// export default RequestManager;

import React, { useState } from "react";
import { Badge, Button, Card, Col, Row, Space } from "antd";
import AdminLayout from "./Layout";

const RequestManager = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: "Request 1", status: "pending" },
    { id: 2, name: "Request 2", status: "accepted" },
    { id: 3, name: "Request 3", status: "rejected" },
    { id: 4, name: "Request 4", status: "pending" },
  ]);

  const [filter, setFilter] = useState("all"); // all, pending, accepted, rejected

  const handleAccept = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: "accepted" } : request
      )
    );
  };

  const handleReject = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: "rejected" } : request
      )
    );
  };

  const filteredRequests = requests.filter((request) => {
    if (filter === "all") return true;
    return request.status === filter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "blue";
      case "accepted":
        return "green";
      case "rejected":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <AdminLayout>
      <div style={{ padding: "16px" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>
          Request Manager
        </h1>

        {/* Filter Buttons */}
        <Space style={{ marginBottom: "16px" }}>
          <Button
            type={filter === "all" ? "primary" : "default"}
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            type={filter === "pending" ? "primary" : "default"}
            onClick={() => setFilter("pending")}
          >
            Pending
          </Button>
          <Button
            type={filter === "accepted" ? "primary" : "default"}
            onClick={() => setFilter("accepted")}
          >
            Accepted
          </Button>
          <Button
            type={filter === "rejected" ? "primary" : "default"}
            onClick={() => setFilter("rejected")}
          >
            Rejected
          </Button>
        </Space>

        {/* Request Cards */}
        <Row gutter={[16, 16]}>
          {filteredRequests.map((request) => (
            <Col xs={24} sm={12} md={8} key={request.id}>
              <Card
                title={request.name}
                extra={
                  <Badge
                    color={getStatusColor(request.status)}
                    text={request.status}
                  />
                }
              >
                <p>This is a sample request description.</p>
                {request.status === "pending" && (
                  <Space>
                    <Button type="primary" onClick={() => handleAccept(request.id)}>
                      Accept
                    </Button>
                    <Button
                      danger
                      type="primary"
                      onClick={() => handleReject(request.id)}
                    >
                      Reject
                    </Button>
                  </Space>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </AdminLayout>
  );
};

export default RequestManager;
