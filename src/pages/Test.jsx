import React from "react";

function Test() {
  return (
    <div className="relative flex min-h-screen w-full bg-[#222222] text-white">
      {/* 메인콘텐츠 */}
      <div className="mx-auto w-full max-w-[calc(100%-80px)] bg-slate-500">
        <div className="bg-slate-300">1번 동영상</div>
      </div>

      {/* 메인-마진40퍼 적용 Toolbar (하단 고정 & 마진 유지) */}
      <div className="absolute bottom-3 left-0 right-0 mx-auto w-full max-w-[calc(100%-80px)]">
        <div className="flex h-14 items-center justify-center rounded-lg bg-black px-4">
          <div className="flex gap-8">
            <button>
              <p>비디오 ON</p>
            </button>
            <button>
              <p>영상 추가</p>
            </button>
          </div>
          <button className="absolute right-3 rounded-md bg-red-600 px-2 py-1">
            <p>나가기</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
