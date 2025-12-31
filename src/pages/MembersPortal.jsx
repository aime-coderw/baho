import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./MembersPortal.css";

export default function MembersPortal() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMembers = async () => {
    const { data, error } = await supabase
      .from("members")
      .select("*")
      .order("registered_at", { ascending: false });
    if (error) console.error(error);
    else setMembers(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchMembers();

    // Real-time subscription for changes in members table
    const channel = supabase
      .channel("members-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "members" },
        () => fetchMembers()
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  // Count members by category (updated from 'type' to 'category')
  const countByCategory = (category) =>
    members.filter((m) => m.category === category).length;

  return (
    <div className="members-portal">
      <h1>Our Standing Community</h1>
      <p className="intro">Know people driving Medical Revolution</p>

      {loading ? (
        <p>Loading members...</p>
      ) : (
        <div className="cards-container">
          <div className="card hospital">
            <h2>{countByCategory("hospital")}</h2>
            <p>Hospitals</p>
          </div>
          <div className="card health-worker">
            <h2>{countByCategory("health_worker")}</h2>
            <p>Health Workers</p>
          </div>
          <div className="card student">
            <h2>{countByCategory("student")}</h2>
            <p>Medical Students</p>
          </div>
          <div className="card volunteer">
            <h2>{countByCategory("volunteer")}</h2>
            <p>Volunteers</p>
          </div>
        </div>
      )}

      <div className="cta-section">
        <h2>Ready to join the Movement for Medical Revolution?</h2>
        <p>Be part of the change. Together, we save lives and impact communities.</p>
        <a href="/register" className="cta-button">
          Join Now
        </a>
      </div>
    </div>
  );
}
