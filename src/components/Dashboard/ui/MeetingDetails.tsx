"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "./scroll-area";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { ArrowRight, ArrowLeft } from "lucide-react";
import {
  CheckCircle,
  Flag,
  AlertCircle,
  Lightbulb,
  Calendar,
  Users,
  List,
  AlertTriangle,
  FileText,
  Download,
} from "lucide-react";
import CategoryCard from "./CategoryCard";
import axios from "axios";
import { useToast } from "../hooks/use-toast";

interface CategoryItem {
  [key: string]: string;
}

interface MeetingDetailsProps {
  data: {
    id: string;
    name: string;
    description: string;
    transcript: string;
    summary: string;
    breakdown: {
      Tasks: { task: string; owner: string; due_date: string }[];
      Decisions: { decision: string; details: string }[];
      Questions: { question: string; status: string; answer?: string }[];
      Insights: { insight: string; reference: string }[];
      Deadlines: { deadline: string; related_to: string }[];
      Attendees: { name: string; role: string }[];
      "Follow-ups": { follow_up: string; owner: string; due_date: string }[];
      Risks: { risk: string; impact: string }[];
    };
  };
}

export default function MeetingDetails({ data }: MeetingDetailsProps) {
  const { toast } = useToast();

  const categories = [
    {
      title: "Tasks",
      icon: CheckCircle,
      items: data.breakdown.Tasks || [],
      gridSpan: "col-span-2",
    },
    {
      title: "Decisions",
      icon: Flag,
      items: data.breakdown.Decisions || [],
      gridSpan: "col-span-2",
    },
    {
      title: "Questions",
      icon: AlertCircle,
      items: data.breakdown.Questions || [],
      gridSpan: "col-span-2",
    },
    {
      title: "Insights",
      icon: Lightbulb,
      items: data.breakdown.Insights || [],
      gridSpan: "col-span-2",
    },
    {
      title: "Deadlines",
      icon: Calendar,
      items: data.breakdown.Deadlines || [],
      gridSpan: "col-span-1",
    },
    {
      title: "Attendees",
      icon: Users,
      items: data.breakdown.Attendees || [],
      gridSpan: "col-span-1",
    },
    {
      title: "Follow-ups",
      icon: List,
      items: data.breakdown["Follow-ups"] || [],
      gridSpan: "col-span-2",
    },
    {
      title: "Risks",
      icon: AlertTriangle,
      items: data.breakdown.Risks || [],
      gridSpan: "col-span-2",
    },
  ];

  const handleExport = async () => {
    try {
      const response = await axios.get(`/api/meetings/${data.id}/export`, {
        responseType: "blob",
      });

      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          `${data.name.replace(/\s+/g, "_")}_Details.docx`
        );
        document.body.appendChild(link);
        link.click();
        link.parentNode?.removeChild(link);
        toast({
          title: "Success",
          description: "Meeting details exported successfully!",
        });
      }
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to export meeting details.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="rounded-[10px] bg-white px-7.5 pb-4 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card">
      <div className="flex justify-between items-center mb-5">
        <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
          Latest Summaries
        </h4>
        <div className="flex items-center">
          <ArrowLeft className="mr-2" size={20} />
          <ArrowRight size={20} />
        </div>
      </div>
      <div className="flex justify-between items-center mb-7">
        <h2 className="text-xl font-bold">{data.name}</h2>

        <button
          onClick={handleExport}
          className="flex items-center px-4 py-2 bg-primary text-white text-sm rounded-[5px] dark:bg-primary-dark"
        >
          <Download className="w-5 h-5 mr-2" />
          Export as DOCX
        </button>
      </div>
      <p className="text-muted-foreground mb-6">{data.description}</p>
      <Tabs defaultValue="summary" className="space-y-4">
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
        </TabsList>
        <TabsContent value="summary">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  <span>Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{data.summary}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  <span>Transcript</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  <p>{data.transcript}</p>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="details">
          <div className="grid grid-cols-2 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                className={category.gridSpan}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CategoryCard
                  title={category.title}
                  items={category.items}
                  gridSpan={category.gridSpan}
                />
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
